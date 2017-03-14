import * as types from './types';
// import Axios from 'axios';

// const apiUrl = 'artStormAPI';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}// this is the filterTable that came with the program

// export const fetchArtSuccess = (art) => {
//   return {
//     type: actionTypes.FETCH_ART_SUCCESS,
//     art
//   }
// };

// //Async Action
// export const fetchArt = () => {
//   // Returns a dispatcher function that dispatches an action at a later time
//   return (dispatch) => {
//     // Returns a promise
//     return Axios.get(apiUrl)
//       .then(response => {
//         // Dispatch another action to consume data
//         dispatch(fetchArtSuccess(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };
