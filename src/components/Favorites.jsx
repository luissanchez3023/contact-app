import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Favorites({ contacts, toggleFavorite }) {
  const [favoriteContacts, setFavoriteContacts] = useState([]);

  useEffect(() => {
    const filteredFavorites = contacts.filter(contact => contact.favorite);
    setFavoriteContacts(filteredFavorites);
  }, [contacts]); 

  return (
    <div>
      <h1>Favorites</h1>
      
      <ul>
        {favoriteContacts.map(contact => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} - {contact.email}{' '}
            <button onClick={() => toggleFavorite(contact.id)}>
              {contact.favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Favorites.propTypes = {
  contacts: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default Favorites;
