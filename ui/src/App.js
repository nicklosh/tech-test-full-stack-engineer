import React, { Component } from 'react';
import Tabs from "./components/Tabs";
import Leads from "./components/Leads";
// import Axios from 'axios';
import './App.css';

class App extends Component {
  // getLeads = () => {
  //   Axios.get("http://localhost:8080/getLeads").then((response) => {
  //     console.log(response);
  //   });
  // }

  state = {
    leads: this.props.data
  }

  setStatus = (id, status) => {
    this.setState({
      leads: this.state.leads.map(lead => {
        if (lead.id === id) {
          lead.status = status;
        }
        return lead;
      })
    });
    // Axios.post('http://localhost:8080/setStatus', {
    //   id: this.props.id,
    //   status: this.props.status
    // }).then(() => console.log('SUCCESS!!!'));
  }

  render() {
    return (
      <div>
        <Tabs>
          <div label="Invited">
            <Leads
              tab="new"
              leads={this.state.leads}
              setStatus={this.setStatus}
            />
          </div>
          <div label="Accepted">
            <Leads
              tab="accepted"
              leads={this.state.leads}
            />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
