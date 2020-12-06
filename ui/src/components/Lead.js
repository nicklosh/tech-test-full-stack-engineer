import React, { Component } from 'react';
import Axios from 'axios';

class Lead extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAccepted: this.props.status === 'accepted',
      isDeclined: false
    }
  }

  acceptLead = () => {
    Axios.post('http://localhost:8080/setStatus', {
      id: this.props.id,
      status: 'accepted'
    }).then(() => console.log('SUCCESS!!!'));
  }

  declineLead = () => {
    Axios.post('http://localhost:8080/setStatus', {
      id: this.props.id,
      status: 'declined'
    }).then(() => console.log('SUCCESS!!!'));
  }

  render() {
    let display_name

    if (this.state.isAccepted) {
      display_name = this.props.name
    } else {
      var name_array = this.props.name.split(" ")
      display_name = name_array[0];
    }

    return !this.state.isDeclined &&
      <div className="lead">
        <div className="lead__row lead__row--header">
          <span className="avatar">{this.props.name[0]}</span>
          <p><strong>{display_name}</strong></p>
          <p>{this.props.created_at}</p>
        </div>
        <div className="lead__row">
          <div className="lead__detail">
            <span className="fa fa-map-marker"></span> {this.props.suburb}
          </div>
          <div className="lead__detail">
            <span className="fa fa-briefcase"></span> {this.props.category}
          </div>
          <div className="lead__detail">
            Job ID: {this.props.id}
          </div>
          {this.state.isAccepted &&
            <div className="lead__detail" >
              ${this.props.price} Lead Invitation
            </div>
          }
        </div>
        {this.state.isAccepted &&
        <div className="lead__row lead__row--conected">
          <div className="lead__detail">
              <span className="fa fa-phone"></span> <a href={"tel:" + this.props.contact_phone}>{this.props.contact_phone}</a>
          </div>
          <div className="lead__detail">
              <span className="fa fa-envelope"></span> <a href={"mailto:" + this.props.contact_email}>{this.props.contact_email}</a>
          </div>
        </div>
        }
        <div className="lead__row">
          <p>{this.props.description}</p>
        </div>
        {!this.state.isAccepted &&
        <div className="lead__row">
          <div className="lead__detail">
            <button className="button button--primary" onClick={() => this.acceptLead()}>Accept</button>
            <button className="button" onClick={() => this.declineLead()}>Decline</button>
          </div>
          <strong>${this.props.price}</strong> Lead Invitation
        </div>
        }
      </div>
  
  }
}

export default Lead;