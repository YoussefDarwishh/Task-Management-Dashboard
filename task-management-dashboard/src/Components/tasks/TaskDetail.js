import React, { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';

const TaskDetail = ({ task, onClose }) => {
  const { updateTask, deleteTask, addCommentToTask } = useTasks();
  const [comment, setComment] = useState('');

  if (!task) return null;

  const handleComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    addCommentToTask(task.id, comment.trim());
    setComment('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15,23,42,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        className="card"
        style={{ maxWidth: '520px', width: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2>{task.title}</h2>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>

        <p style={{ marginTop: '0.5rem' }}>
          {task.description || 'No description'}
        </p>

        <div
          style={{
            marginTop: '0.6rem',
            display: 'flex',
            gap: '0.5rem',
            fontSize: '0.85rem',
          }}
        >
          <span>Status: {task.status}</span>
          {task.dueDate && (
            <span>
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </span>
          )}
        </div>

        <div style={{ marginTop: '0.75rem' }}>
          <strong>Quick actions:</strong>
          <div style={{ marginTop: '0.4rem', display: 'flex', gap: '0.5rem' }}>
            <button
              className="btn btn-outline"
              onClick={() => updateTask(task.id, { status: 'todo' })}
            >
              To Do
            </button>
            <button
              className="btn btn-outline"
              onClick={() => updateTask(task.id, { status: 'in-progress' })}
            >
              In Progress
            </button>
            <button
              className="btn btn-outline"
              onClick={() => updateTask(task.id, { status: 'done' })}
            >
              Done
            </button>
            <button
              className="btn btn-outline"
              style={{ color: 'var(--danger)' }}
              onClick={() => {
                deleteTask(task.id);
                onClose();
              }}
            >
              Delete
            </button>
          </div>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Comments</h3>
          <form onSubmit={handleComment} style={{ marginTop: '0.4rem' }}>
            <textarea
              className="input"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: '0.5rem' }}
            >
              Add Comment
            </button>
          </form>
          <div style={{ marginTop: '0.7rem' }}>
            {(task.comments || []).length === 0 ? (
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                }}
              >
                No comments yet.
              </p>
            ) : (
              (task.comments || []).map((c) => (
                <div
                  key={c.id}
                  style={{
                    marginBottom: '0.4rem',
                    padding: '0.4rem 0.5rem',
                    borderRadius: '0.4rem',
                    backgroundColor: 'var(--bg)',
                    fontSize: '0.85rem',
                  }}
                >
                  <div>{c.text}</div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.1rem',
                    }}
                  >
                    {new Date(c.createdAt).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
