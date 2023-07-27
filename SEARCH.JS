import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchDonors } from '../actions/donorActions';

const SearchDonors = () => {
  const [bloodType, setBloodType] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.donor.searchResults);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchDonors(bloodType));
  };

  return (
    <div>
      <h2>Search Blood Donors</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label>Blood Type:</label>
          <input
            type="text"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((donor, index) => (
          <li key={index}>
            Name: {donor.name}, Blood Type: {donor.bloodType}, Location: {donor.location}
          </li>
        ))}
      </ul>
