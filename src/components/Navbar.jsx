import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import globantlogo from '../assets/images/GlobantLogo.svg.png';

function Navbar({ handleNewContactClick }) {
  return (
    <nav className="navbar">
      <img src={globantlogo} alt="globant-logo" className="logo"/>
      <ul>
        <li><Link to="/">Overview</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><button className="new-button" onClick={handleNewContactClick}>+ New</button></li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  handleNewContactClick: PropTypes.func.isRequired 
};

export default Navbar;
