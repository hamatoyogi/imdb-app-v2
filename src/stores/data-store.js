import { observable } from 'mobx';

class DataStore {
  constructor() {
    this.state = {
      data: null
    };
  }

}

export const dataStore = observable(new DataStore().state);
