import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTasks } from '../../hooks/useTasks';

const TaskForm = () => {
  const { projects, addTask } = useTasks();
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) titleRef.current.focus();
  }, []);

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        status: 'todo',
        projectId: '',
        dueDate: '',
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
      })}
      onSubmit={(values, helpers) => {
        addTask(values);
        helpers.resetForm();
      }}
    >
      {() => (
        <Form className="card" style={{ marginBottom: '1rem' }}>
          <h3>Create Task</h3>
          <label className="label" htmlFor="title">
            Title
          </label>
          <Field innerRef={titleRef} name="title" className="input" />
          <ErrorMessage name="title" component="div" className="error-text" />

          <label className="label" htmlFor="description">
            Description
          </label>
          <Field as="textarea" name="description" className="input" rows="3" />

          <label className="label" htmlFor="projectId">
            Project
          </label>
          <Field as="select" name="projectId" className="input">
            <option value="">Unassigned</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </Field>

          <label className="label" htmlFor="status">
            Status
          </label>
          <Field as="select" name="status" className="input">
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </Field>

          <label className="label" htmlFor="dueDate">
            Due date
          </label>
          <Field name="dueDate" type="date" className="input" />

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: '0.75rem' }}
          >
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
