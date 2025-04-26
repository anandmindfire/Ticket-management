import React, { useState } from 'react';
import { Ticket } from '../types';

type Props = {
  onSubmit: (ticket: Omit<Ticket, 'id'>) => void;
  initial?: Ticket | null;
  onCancel?: () => void;
};

const TicketForm: React.FC<Props> = ({ onSubmit, initial, onCancel }) => {
  const [title, setTitle] = useState(initial?.title || '');
  const [description, setDescription] = useState(initial?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <div>
        <button type="submit">{initial ? 'Update' : 'Create'}</button>
        {initial && onCancel && (
          <button type="button" onClick={onCancel}>Cancel</button>
        )}
      </div>
    </form>
  );
};

export default TicketForm;
