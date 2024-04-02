import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Overview from './components/Overview.jsx';
import NewContactModal from './components/NewContactModal.jsx';
import Contacts from './components/Contacts.jsx';
import Favorites from './components/Favorites.jsx';
import View from './components/view.jsx';

function App() {
  const [showNewContactModal, setShowNewContactModal] = useState(false);

  const handleNewContactClick = () => {
    setShowNewContactModal(true);
  };

  const handleCloseModal = () => {
    setShowNewContactModal(false);
  };

  return (
    <Router>
      <div>
        <Navbar handleNewContactClick={handleNewContactClick} />
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/view" component={View} />
        </Switch>
        {showNewContactModal && <NewContactModal onClose={handleCloseModal} />}
      </div>
    </Router>
  );
}

export default App;