import * as types from './types';

import Axios from 'axios';
const apiUrl = 'https://art-storm.herokuapp.com/artist';


// ./src/actions/bookActions.js
export const createArtist = (artist) => {
  return (dispatch) => {
    return Axios.post(apiUrl, artist)
      .then(response => {
        console.log(response);
        // Dispatch a synchronous action
        // to handle data
        dispatch(createArtistSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

// ./src/actions/bookActions.js
export const createArtistSuccess = (artist) => {
  return {
    type: 'CREATE_ARTIST_SUCCESS',
    artist
  }
};
