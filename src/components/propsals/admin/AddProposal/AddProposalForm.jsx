import React from 'react';
import { Formik, Form } from 'formik';
import { withRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';

function AddProposalForm(props) {
  const { classes } = props;
  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={(values, { setSubmitting }) => {
        const clone = values;
        delete clone.files;
        setSubmitting(false);
      }}
    >
      {({
        isValid,
        errors,
        handleChange,
        values,
        isSubmitting,
        touched,
        handleBlur,
        handleReset
      }) => (
        <Form className={classes.container}>
          <Paper elevation={24} className={classes.paper} />
        </Form>
      )}
    </Formik>
  );
}

export default withRouter(AddProposalForm);
