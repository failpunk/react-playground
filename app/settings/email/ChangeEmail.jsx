import React from 'react';

import SectionHeader from './../SectionHeader.jsx';

let ChangeEmail = React.createClass({
  render () {
    return (
      <div>
        <SectionHeader
          title={'Change Email'}
          desc={'Change your email address'}>
        </SectionHeader>
      </div>
    );
  }
});

export default ChangeEmail;