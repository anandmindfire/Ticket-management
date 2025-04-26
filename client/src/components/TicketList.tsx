import React from 'react';
import { Ticket } from '../types';

type Props = {
  tickets: Ticket[];
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: string) => void;
};

const TicketList: React.FC<Props> = ({ tickets, onEdit, onDelete }) => (
  <table className="ticket-list">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tickets.map(ticket => (
        <tr key={ticket.id}>
          <td>{ticket.title}</td>
          <td>{ticket.description}</td>
          <td>
            <button onClick={() => onEdit(ticket)}>Edit</button>
            <button onClick={() => onDelete(ticket.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TicketList;
