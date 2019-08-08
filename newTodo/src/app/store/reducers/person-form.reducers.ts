import { createReducer, on } from '@ngrx/store';
import { FORMCHANGE, FORMRESET } from '../action/person-form.action';
export interface PersonFormState {
  id: number;
  personName: string;
  personAge: string;
  personSex: string;
  personCity: string;
  personPho: string;
  personPro: string;
  personEmail?: string;
}
export const initPersonFormState: PersonFormState = {
  id: 0,
  personName: '',
  personAge: '',
  personSex: '',
  personCity: '',
  personPho: '',
  personPro: '',
  personEmail: '',
};

export const initPersonReducers = createReducer(
  initPersonFormState,
  on(FORMCHANGE, (state, action) => {
    state.id = action.item.id;
    state.personName = action.item.personName;
    state.personAge = action.item.personAge;
    state.personSex = action.item.personSex;
    state.personCity = action.item.personCity;
    state.personPho = action.item.personPho;
    state.personPro = action.item.personPro;
    state.personEmail = action.item.personEmail;
    return state;
  }),
  on(FORMRESET, state => state = initPersonFormState)
);
