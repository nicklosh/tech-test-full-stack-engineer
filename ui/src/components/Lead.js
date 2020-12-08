import React, { Component } from 'react';
// import Axios from 'axios';
import PropTypes from 'prop-types';

class Lead extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAccepted: this.props.status === 'accepted',
      isDeclined: false
    }
  }

  // acceptLead = () => {
  //   Axios.post('http://localhost:8080/setStatus', {
  //     id: this.props.id,
  //     status: 'accepted'
  //   }).then(() => console.log('SUCCESS!!!'));
  // }

  // declineLead = () => {
  //   Axios.post('http://localhost:8080/setStatus', {
  //     id: this.props.id,
  //     status: 'declined'
  //   }).then(() => console.log('SUCCESS!!!'));
  // }

  render() {
    let display_name

    if (this.props.lead.status === 'new') {
      display_name = this.props.lead.contact_name
    } else {
      var name_array = this.props.lead.contact_name.split(" ")
      display_name = name_array[0];
    }

    return (this.props.tab === this.props.lead.status) && (
      <div className="lead">
        <div className="lead__row lead__row--header">
          <span className="avatar">{this.props.lead.contact_name[0]}</span>
          <p><strong>{display_name}</strong></p>
          <p>{this.props.lead.created_at}</p>
        </div>
        <div className="lead__row">
          <div className="lead__detail">
            <span className="fa fa-map-marker"></span> {this.props.lead.suburb}
          </div>
          <div className="lead__detail">
            <span className="fa fa-briefcase"></span> {this.props.lead.category}
          </div>
          <div className="lead__detail">
            Job ID: {this.props.lead.id}
          </div>
          {this.props.lead.status === 'accepted' &&
            <div className="lead__detail" >
              ${this.props.lead.price} Lead Invitation
            </div>
          }
        </div>
        {this.props.lead.status === 'accepted' &&
        <div className="lead__row lead__row--conected">
          <div className="lead__detail">
              <span className="fa fa-phone"></span> <a href={"tel:" + this.props.lead.contact_phone}>{this.props.lead.contact_phone}</a>
          </div>
          <div className="lead__detail">
              <span className="fa fa-envelope"></span> <a href={"mailto:" + this.props.lead.contact_email}>{this.props.lead.contact_email}</a>
          </div>
        </div>
        }
        <div className="lead__row">
          <p>{this.props.lead.description}</p>
        </div>
        {this.props.lead.status === 'new' &&
        <div className="lead__row">
          <div className="lead__detail">
            <button className="button button--primary" onClick={() => this.acceptLead()}>Accept</button>
            <button className="button" onClick={() => this.declineLead()}>Decline</button>
          </div>
          <strong>${this.props.lead.price}</strong> Lead Invitation
        </div>
        }
      </div>
    )
  }
}

Lead.propTypes = {
  lead: PropTypes.object.isRequired
}

export default Lead;