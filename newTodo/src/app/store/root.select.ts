import { ROOTState } from './root.state';
import { createSelector } from '@ngrx/store';
import { LoginState } from './reducers/login.reducer';
import { ItemFormState } from './reducers/items-form.reducer';
import { PersonFormState } from './reducers/person-form.reducers';

export const selectRoot = (state: ROOTState) => state;
export const selectLogin = (state: ROOTState) => state.login;
export const selectForm = (state: ROOTState) => state.pages.createItemFrom;
export const selectPerson = (state: ROOTState) => state.pages.createPersonForm;

export const selectRootState = createSelector(
  selectRoot, (state: ROOTState) => state
);
export const selectLoginState = createSelector(
  selectLogin, (state: LoginState) => state
);

export const selectFormState = createSelector(
  selectForm,
  (state: ItemFormState) => state
);

export const selectPersonState = createSelector(
  selectPerson,
  (state: PersonFormState) => state
);

