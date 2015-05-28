var React = require('react');

var SectionHeader = require('./../SectionHeader.jsx');

var ChangeEmail = React.createClass({
  render: function () {
    return (
      <div>
        <SectionHeader title={'Change Email'}
          desc={'Change your email address'}>
        </SectionHeader>
      </div>
    );
  }
});

module.exports = ChangeEmail;