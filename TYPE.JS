// Action types
export const REGISTER_DONOR = 'REGISTER_DONOR';
export const SEARCH_DONORS = 'SEARCH_DONORS';
import axios from 'axios';
import { REGISTER_DONOR, SEARCH_DONORS } from './types';

export const registerDonor = (donorData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/donors', donorData);
    dispatch({ type: REGISTER_DONOR, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const searchDonors = (bloodType) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/donors?bloodType=${bloodType}`);
    dispatch({ type: SEARCH_DONORS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
