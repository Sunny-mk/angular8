import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { LOGINFAILURE } from 'src/app/store/action/login.action';
import { selectLoginState } from 'src/app/store/root.select';
import { ROOTState } from 'src/app/store/root.state';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
// tslint:disable-next-line: no-inferrable-types
  isHome: boolean = true;
// tslint:disable-next-line: no-inferrable-types
  isLogin: boolean = false;
// tslint:disable-next-line: no-inferrable-types
  isItems: boolean = false;
  constructor(
    private store: Store<ROOTState>,
    private router: Router
  ) {
    this.store.pipe(select(selectLoginState));
  }
  logout() {
    this.store.dispatch(LOGINFAILURE());
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
