import React from 'react';
import {Link} from 'react-router';

let Sidebar = React.createClass({

  navItems: ['profile', 'settings', 'messages'],

  render: function() {
    var currentRoute = this.props.navstate.pathname;

    let sidebarItems = this.navItems.map(function(item) {
      return (
        <SidebarItem
          name={item}
          isActive={currentRoute.includes(item)}>
        </SidebarItem>
      );
    });

    return (
      <ul className="nav nav-pills nav-stacked">
      {sidebarItems}
      </ul>
    );
  }
});

let SidebarItem = React.createClass({

  propTypes: {
    name: React.PropTypes.string
  },

  render() {
    return (
      <li role="presentation" className={this.props.isActive ? 'active' :''}>
        <Link to={this.props.name}>{this.props.name}</Link>
      </li>
    );
  }
});

export default Sidebar;