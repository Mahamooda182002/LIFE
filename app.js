import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RegisterDonor from './components/RegisterDonor';
import DonorDashboard from './components/DonorDashboard';
import SearchDonors from './components/SearchDonors';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register-donor" component={RegisterDonor} />
          <Route path="/donor-dashboard" component={DonorDashboard} />
          <Route path="/search-donors" component={SearchDonors} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
