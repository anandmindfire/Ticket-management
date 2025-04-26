import React, { useEffect, useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import { Ticket } from './types';

const API_URL = 'http://localhost:8080/api/tickets';

const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Ticket | null>(null);

  const fetchTickets = async () => {
    setLoading(true);
    const res = await fetch(API_URL);
    let data = await res.json();
    if (!Array.isArray(data)) data = [];
    setTickets(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleCreate = async (ticket: Omit<Ticket, 'id'>) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket),
    });
    fetchTickets();
  };

  const handleUpdate = async (id: string, ticket: Omit<Ticket, 'id'>) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket),
    });
    setSelected(null);
    fetchTickets();
  };

  const handleDelete = async (id: string) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTickets();
  };

  return (
    <div className="container">
      <h1>Ticket Manager</h1>
      <TicketForm
        key={selected?.id || 'new'}
        onSubmit={selected ? (data) => handleUpdate(selected.id, data) : handleCreate}
        initial={selected}
        onCancel={() => setSelected(null)}
      />
      <hr />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TicketList
          tickets={tickets}
          onEdit={setSelected}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default App;
