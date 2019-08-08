import { combineReducers, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { ROOTState } from './root.state';
import { loginReducer } from './reducers/login.reducer';
import { ItemFormReducer } from './reducers/items-form.reducer';
import { initPersonReducers } from './reducers/person-form.reducers';
export function getReducers(): any {
  return {
    pages: combineReducers({
      createItemFrom: ItemFormReducer,
      createPersonForm: initPersonReducers
    }),
    login: loginReducer
  };
}
export const ROOTREDUCER_TOKEN = new InjectionToken<ActionReducerMap<ROOTState>>('ROOTREDUCER_TOKEN', {
  factory: () => {
    return getReducers();
  }
});
