import React from 'react';
import Router from 'react-router';
import {RouteHandler} from 'react-router';

import NavState from './NavState.jsx';
import Sidebar from './Sidebar.jsx';

let Dashboard = React.createClass({

  navItems: ['profile', 'settings', 'messages'],

  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <Sidebar
            navItems={this.navItems}
            navstate={NavState.current}
          ></Sidebar>
        </div>
        <div className="col-lg-8">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

export default Dashboard;