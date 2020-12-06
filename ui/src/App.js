import React, { Component } from 'react';
import Tabs from "./components/Tabs";
import Lead from "./components/Lead";
import Axios from 'axios';
import './App.css';

class App extends Component {

  
  render() {

    const getLeads = () => {
      Axios.get("http://localhost:8080/getLeads").then((response) => {
        console.log(response);
      });
    }

    // Fake data
    const data = this.props.data;

    const leadsList = data.map(job => {
      return job.status === 'new' && (
        <div key={job.id}>
        <Lead
            id={job.id}
            status={job.status}
            name={job.contact_name}
            suburb={job.suburb}
            category={job.category}
            contact_phone={job.contact_phone}
            contact_email={job.contact_email}
            price={job.price}
            description={job.description}
            created_at={job.created_at}
          />
        </div>
      )
    })

    const acceptedList = data.map(job => {
      return job.status === 'accepted' && (
        <div key={job.id}>
          <Lead
            id={job.id}
            status={job.status}
            name={job.contact_name}
            suburb={job.suburb}
            category={job.category}
            contact_phone={job.contact_phone}
            contact_email={job.contact_email}
            price={job.price}
            description={job.description}
            created_at={job.created_at}
          />
        </div>
      )
    })

    return (
      <div>
        <Tabs>
          <div label="Invited">
            {leadsList}
          </div>
          <div label="Accepted">
            {acceptedList}
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
