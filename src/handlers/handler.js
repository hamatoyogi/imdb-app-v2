import { dataStore } from '../stores/data-store';

class Handler {
  getMoviesFromQuery(query) {
    return fetch(`http://www.omdbapi.com?s=${ query }`)
      .then((response) => response.json())
      .then((responseJson) => {
        dataStore.data = responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export const handler = new Handler();