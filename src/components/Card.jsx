import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Card = ({ name, email, onClick }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [contacts, setContacts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://randomuser.me/api/${name}${email}`);
      const data = await response.json();
      setImageUrl(data.sprites.front_default);
    };
    fetchData();
  }, [name, email]);

  const toggleFavorite = (id) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-card" onClick={onClick}>
      <div>
        <img className="contact-avatar" src={imageUrl}></img>
      </div>
      <div className="contact-info">
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <button className="favorite-button" onClick={() => toggleFavorite()}>
        <i className="fas fa-heart"></i>
      </button>
      <button className="remove-button" onClick={() => deleteContact()}>
        Remove
      </button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
