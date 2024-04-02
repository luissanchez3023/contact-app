import { useState } from 'react';
import '../index.css';
import Card from './Card';
import NewContactModal from './NewContactModal';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      avatar: 'https://example.com/avatar1.png',
      favorite: false,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      avatar: 'https://example.com/avatar2.png',
      favorite: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const toggleFavorite = (id) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setShowModal(false); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div className="contacts-container">
      <h1 className="contacts-heading">Contacts<span className="line"></span></h1>
      <div className="contact-grid">
        <NewContactModal addContact={addContact} onClose={handleCloseModal} show={showModal} />
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            name={`${contact.firstName} ${contact.lastName}`}
            email={contact.email}
            onClick={() => {}}
            toggleFavorite={() => toggleFavorite(contact.id)} 
            deleteContact={() => deleteContact(contact.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;