import React, { Component } from 'react';
// import Axios from 'axios';
import PropTypes from 'prop-types';

class Lead extends Component {
  render() {
    const { 
      contact_name,
      status, 
      id,
      created_at,
      suburb,
      category,
      price,
      contact_phone,
      contact_email,
      description
    } = this.props.lead;

    let display_name

    if (status === 'accepted') {
      display_name = contact_name
    } else {
      var name_array = contact_name.split(" ")
      display_name = name_array[0];
    }

    return (this.props.tab === status) && (
      <div className="lead">
        <div className="lead__row lead__row--header">
          <span className="avatar">{contact_name[0]}</span>
          <p><strong>{display_name}</strong></p>
          <p>{created_at}</p>
        </div>
        <div className="lead__row">
          <div className="lead__detail">
            <span className="fa fa-map-marker"></span> {suburb}
          </div>
          <div className="lead__detail">
            <span className="fa fa-briefcase"></span> {category}
          </div>
          <div className="lead__detail">
            Job ID: {id}
          </div>
          {status === 'accepted' &&
            <div className="lead__detail" >
              ${price} Lead Invitation
            </div>
          }
        </div>
        {status === 'accepted' &&
        <div className="lead__row lead__row--conected">
          <div className="lead__detail">
              <span className="fa fa-phone"></span> <a href={"tel:" + contact_phone}>{contact_phone}</a>
          </div>
          <div className="lead__detail">
              <span className="fa fa-envelope"></span> <a href={"mailto:" + contact_email}>{contact_email}</a>
          </div>
        </div>
        }
        <div className="lead__row">
          <p>{description}</p>
        </div>
        {status === 'new' &&
        <div className="lead__row">
          <div className="lead__detail">
            <button className="button button--primary" onClick={() => this.props.setStatus(id, 'accepted')}>Accept</button>
            <button className="button" onClick={() => this.props.setStatus(id, 'declined')}>Decline</button>
          </div>
          <strong>${price}</strong> Lead Invitation
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