import { Person } from '../models/personnel';
import { LoginState } from './reducers/login.reducer';
import { ItemFormState, initItemFormState } from './reducers/items-form.reducer';
import { PersonFormState, initPersonFormState } from './reducers/person-form.reducers';

export interface ROOTState {
  pages: {
    createItemFrom: ItemFormState;
    createPersonForm: PersonFormState;
  };
  login: LoginState;
}


export const initROOTState: ROOTState = {
  pages: {
    createItemFrom: initItemFormState,
    createPersonForm: initPersonFormState
  },
  login: {
    loginState: false
  }
};

