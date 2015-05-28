import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} from 'react-router';

import SectionHeader from './../SectionHeader.jsx';

let Profile = React.createClass({
  render () {
    return (
      <div>
        <SectionHeader
          title={'Account Profile'}
          desc={'Show your school pride and personalize your StudyMode experience.'}>
        </SectionHeader>
      </div>
    );
  }
});

export default Profile;