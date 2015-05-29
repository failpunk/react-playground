import React from 'react';
import Router from 'react-router';
import {Link, Navigation} from 'react-router';
import Formsy from 'formsy-react';
import {Input} from 'formsy-react-components';

// Allows us to put this in validators object like all the other validators
Formsy.addValidationRule('isRequired', function(values, value) {
  return typeof value !== 'undefined' && value !== '' && value !== false;
});

// Custom validator to see if two fields match
Formsy.addValidationRule('fieldsMatch', function(values, value, otherField) {
  return values[otherField] == value;
});

let ChangePasswordForm = React.createClass({

  mixins: [Navigation],

  backToSettings: function() {
    this.transitionTo('settings');
  },

  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },

  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },

  submit() {
    console.log('submit');
  },

  // Validation rules
  validation: {
    types: {
      oldpassword: {
        isRequired: true,
        minLength: 6
      },
      password: {
        isRequired: true,
        minLength: 6
      },
      newpassword: {
        isRequired: true,
        minLength: 6,
        fieldsMatch: 'password'
      }
    },
    errors: {
      isRequired:  'This is a required field',
      minLength: 'Your password must be at least six characters',
      fieldsMatch: 'You passwords do not match'
    }
  },

  render () {
    return (
    <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
      <Input
        name="oldpassword"
        type="password"
        placeholder="Old Password"
        label="Old Password"
        autoComplete="off"
        validations={this.validation.types.oldpassword}
        validationErrors={this.validation.errors}/>

      <Input
        name="password"
        type="password"
        placeholder="New Password"
        label="New Password"
        autoComplete="off"
        validations={this.validation.types.password}
        validationErrors={this.validation.errors}/>

      <Input
        name="newpassword"
        type="password"
        placeholder="Confirm New Password"
        label="Confirm New Password"
        autoComplete="off"
        validations={this.validation.types.newpassword}
        validationErrors={this.validation.errors}/>

      <input type="submit" defaultValue="Update Password" className="btn btn-primary" />
      <input type="button" defaultValue="Back" className="btn" onClick={this.backToSettings}/>
    </Formsy.Form>
    );
  }
});

export default ChangePasswordForm;