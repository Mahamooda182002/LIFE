import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Blood Donor and Finder App</h1>
      <p>
        This app helps connect blood donors with individuals in need of blood
        transfusions. Register as a donor or search for nearby donors based on
        blood type and location.
      </p>
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerDonor } from '../actions/donorActions';

const RegisterDonor = () => {
  const [name, setName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const donorData = { name, bloodType, location };
    dispatch(registerDonor(donorData));
  };

  return (
    <div>
      <h2>Register as a Blood Donor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Blood Type:</label>
          <input
            type="text"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterDonor;
