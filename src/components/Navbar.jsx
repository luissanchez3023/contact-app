import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import globantlogo from '../assets/images/GlobantLogo.svg.png';

function Navbar({ handleNewContactClick }) {
  return (
    <nav className="navbar">
      <img src={globantlogo} alt="globant-logo" className="logo"/>
      <ul>
        <li><NavLink to="/">Overview</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
        <li><NavLink to="/favorites">Favorites</NavLink></li>
        <li>
          <NavLink to="/view" className="new-button" onClick={handleNewContactClick}>
            + New
          </NavLink>
          </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  handleNewContactClick: PropTypes.func.isRequired 
};

export default Navbar;
