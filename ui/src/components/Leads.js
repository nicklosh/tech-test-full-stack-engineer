import React, { Component } from 'react';
import Lead from "./Lead";
import PropTypes from 'prop-types';

class Leads extends Component {
    render () {
        return this.props.leads.map((lead) => (
            <Lead key={lead.id} lead={lead} tab={this.props.tab} />
        ));
    }
}

Leads.propTypes = {
    leads: PropTypes.array.isRequired
}

export default Leads;