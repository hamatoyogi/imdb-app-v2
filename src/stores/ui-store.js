import { observable } from 'mobx';

class UiStore {
  constructor() {
    this.state = {
      searchParam: ''
    };
  }
}

export const uiStore = observable(new UiStore().state);
