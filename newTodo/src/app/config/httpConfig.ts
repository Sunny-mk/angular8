import { HttpHeaders } from '@angular/common/http';
export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export const itemUrl = 'api/items';
export const personUrl = 'api/person';
