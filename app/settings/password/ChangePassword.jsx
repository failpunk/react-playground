import React from 'react';

import SectionHeader from './../SectionHeader.jsx';
import ChangePasswordForm from './ChangePasswordForm.jsx';

let ChangePassword = React.createClass({
  render () {
    return (
      <div>
        <SectionHeader
          title={'Change Password'}
          desc={'Change your password'}>
        </SectionHeader>

        <ChangePasswordForm></ChangePasswordForm>
      </div>
    );
  }
});

export default ChangePassword;