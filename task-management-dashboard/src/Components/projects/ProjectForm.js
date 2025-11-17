import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProjectForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
      })}
      onSubmit={(values, helpers) => {
        onSubmit(values);
        helpers.resetForm();
      }}
    >
      {() => (
        <Form className="card" style={{ marginBottom: '1rem' }}>
          <h3>Create Project</h3>
          <label className="label" htmlFor="name">
            Name
          </label>
          <Field name="name" className="input" />
          <ErrorMessage name="name" component="div" className="error-text" />

          <label className="label" htmlFor="description">
            Description
          </label>
          <Field as="textarea" name="description" className="input" rows="3" />

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: '0.75rem' }}
          >
            Add Project
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectForm;
