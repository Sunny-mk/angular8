import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { LoginService } from '../../services/login-service/login.service';
import { State } from '../../config/state.enum';
import { LOGINSUCCESS } from '../../store/action/login.action';
import { selectLoginState } from 'src/app/store/root.select';
import { LoginState } from 'src/app/store/reducers/login.reducer';
import { ROOTState } from 'src/app/store/root.state';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginState$: Observable<LoginState>;
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
  });
  submitClcik = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private store: Store<ROOTState>
  ) {
    this.store.pipe(
      select(selectLoginState)
    ).subscribe(
      data => console.log(data)
    );
  }
  onSubmit() {
    this.loginForm.valid ? this.submitClcik = true : this.submitClcik = false;
    this.submitClcik ? this.loginService.login(this.loginForm).subscribe(data => {
      if (data.state === State.SUCCESS) {
        console.log('登陆成功');
        this.store.dispatch(LOGINSUCCESS());
        this.router.navigate(['/home']);
      } else {
        alert(data.message);
        this.router.navigate(['/login']);
      }
// tslint:disable-next-line: no-unused-expression
    }) : null;
  }
  ngOnInit() {
  }
  back() {
    this.router.navigate(['/home']);
  }
}
