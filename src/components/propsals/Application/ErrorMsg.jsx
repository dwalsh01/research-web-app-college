import React from 'react';
import { Field, getIn } from 'formik';

const ErrorMsg = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);

      return touch && error ? error : null;
    }}
  />
);
export default ErrorMsg;
