var React = require('react');

var SectionHeader = React.createClass({
  render: function() {
    return (
      <div className="page-header">
        <h1 id="type">{this.props.title}</h1>
        <p className="lead">{this.props.desc}</p>
      </div>
    );
  }
});

module.exports = SectionHeader;