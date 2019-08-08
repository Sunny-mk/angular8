import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ROOTState } from '../store/root.state';
import { selectLoginState } from '../store/root.select';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loginState = false;
  constructor(private store: Store<ROOTState>, private router: Router) {
    this.store.pipe(
      select(selectLoginState)
    ).subscribe(login =>  this.loginState = login.loginState);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const url: string = state.url;
    // return true;
    return this.checkLogin(url);
  }


  checkLogin(url: string): boolean {

    if (this.loginState) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}






