import React from 'react';

let SectionHeader = React.createClass({
  render () {
    return (
      <div className="page-header">
        <h1 id="type">{this.props.title}</h1>
        <p className="lead">{this.props.desc}</p>
      </div>
    );
  }
});

export default SectionHeader;