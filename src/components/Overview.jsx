import { useState } from 'react';
import NewContactModal from './NewContactModal';
import PropTypes from 'prop-types';
import Card from './Card'; // Importa tu componente Card aquí

function Overview({ showNewContactModal, setShowNewContactModal }) {
  const [currentContacts, setCurrentContacts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addNewContact = (newContact) => {
    setCurrentContacts([...currentContacts, newContact]);
    if (newContact.favorite) {
      setFavorites([...favorites, newContact]);
    }
  };

  const handleCloseModal = () => {
    setShowNewContactModal(false);
  };

  return (
    <div>
   
      <h2>Contactos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentContacts.map((contact, index) => (
          <Card key={index} contact={contact} />
        ))}
      </div>

     
      <h2>Favoritos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {favorites.map((favorite, index) => (
          <Card key={index} contact={favorite} />
        ))}
      </div>

    
      {showNewContactModal && (
        <NewContactModal addContact={addNewContact} onClose={handleCloseModal} />
      )}
    </div>
  );
}

Overview.propTypes = {
  showNewContactModal: PropTypes.bool.isRequired,
  setShowNewContactModal: PropTypes.func.isRequired
};

export default Overview;
