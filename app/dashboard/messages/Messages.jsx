import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} from 'react-router';

import SectionHeader from './../SectionHeader.jsx';

let Messages = React.createClass({
  render () {
    return (
      <div>
        <SectionHeader
          title={'Account Messages'}
          desc={'Read and respond to your messages.'}>
        </SectionHeader>
      </div>
    );
  }
});

export default Messages;