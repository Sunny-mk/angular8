import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  login$: Observable<boolean>;

  constructor(private store: Store<boolean>) {
    this.login$ = store.pipe(select('loginState'));
  }

  ngOnInit() {
  }

}
