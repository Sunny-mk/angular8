import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Items } from '../models/item';
import { Person } from '../models/personnel';
import { itemUrl, personUrl, httpOptions } from '../config/httpConfig';
@Injectable({
  providedIn: 'root'
})
export class ItemsFormService {

  constructor(private http: HttpClient) { }
  create(items: Items): Observable<Items> {
    return this.http.post<Items>(itemUrl, items, httpOptions);
  }
  get(): Observable<Items[]> {
    return this.http.get<Items[]>(itemUrl);
  }
  getAlreaday(): Observable<Items[]> {
    return this.http.get<Items[]>(itemUrl + '/?itemState = 已办');
  }
  getWaitFor(): Observable<Items[]> {
    return this.http.get<Items[]>(itemUrl + '/?itemState = 待办');
  }
  dealWith(tableData: Items) {
    return this.http.put<Items>(itemUrl, tableData, httpOptions);
  }


  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(personUrl, person, httpOptions);
  }
  getPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(personUrl);
  }
}
