import { useState } from 'react';
import PropTypes from 'prop-types';

function NewContactModal({ addContact, onClose }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [addToFavorites, setAddToFavorites] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { 
      id: Math.random(),
      firstName: firstName, 
      lastName: lastName, 
      email: email, 
      favorite: addToFavorites 
    };
    addContact(newContact);
    onClose(); 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="First Name" 
            className="input-dark-green" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            className="input-dark-green" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="input-dark-green" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label className="label-white">
            <input 
              type="checkbox" 
              checked={addToFavorites}
              onChange={(e) => setAddToFavorites(e.target.checked)} 
            /> Add to Favorites
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

NewContactModal.propTypes = {
  addContact: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewContactModal;
