import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');

  return (
    <div className="card" style={{ maxWidth: '420px', margin: '3rem auto' }}>
      <h2>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Min 6 characters').required('Required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setFormError('');
          try {
            await register(values);
            navigate('/app/dashboard');
          } catch (err) {
            setFormError(err.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ marginTop: '1rem' }}>
            <label className="label" htmlFor="name">
              Name
            </label>
            <Field name="name" className="input" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-text"
            />

            <label className="label" htmlFor="email">
              Email
            </label>
            <Field name="email" type="email" className="input" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-text"
            />

            <label className="label" htmlFor="password">
              Password
            </label>
            <Field name="password" type="password" className="input" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-text"
            />

            {formError && (
              <div className="error-text" style={{ marginTop: '0.5rem' }}>
                {formError}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: '1rem', width: '100%' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>

      <div style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
