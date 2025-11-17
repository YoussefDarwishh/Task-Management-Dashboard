import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '3rem auto',
        padding: '2rem',
      }}
      className="card"
    >
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setFormError('');
          try {
            await login(values.email, values.password);
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
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>

      <div
        style={{
          marginTop: '0.75rem',
          fontSize: '0.85rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/register">Create account</Link>
        <Link to="/reset-password">Forgot password?</Link>
      </div>
    </div>
  );
};

export default Login;
