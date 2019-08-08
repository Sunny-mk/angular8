import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { LoginMock } from '../../models/login';
import { LoginMocks } from '../../mock/lgoin-mock';
import { Message } from '../../models/message';
import { State } from '../../config/state.enum';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginMocks = LoginMocks;
  loginState = false;
  constructor() { }
  login(from: FormGroup): Observable<Message> {
    let mes: Message;
    const loginJSON = from.getRawValue();
    const login = new LoginMock(loginJSON.userName, loginJSON.passWord);
    mes = new Message('登陆失败，请检查账号和密码是否正确', State.ERROR);
    this.loginState = false;
    this.loginMocks.forEach(loginData => {
      if (loginData.userName === login.userName && loginData.passWord === login.passWord) {
        mes = new Message('登陆成功', State.SUCCESS);
        this.loginState = true;
      }
    });
    return of(mes);
  }

  // tslint:disable-next-line: ban-types
  getLogin(): Observable<Boolean> {
    return of(this.loginState);
  }
}
