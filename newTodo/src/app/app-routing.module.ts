import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const appRouters: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./module/main/main.module').then(mod => mod.MainModule)
  }
];
// 设置拦截
const config = {
  enableTracing: true
};
@NgModule({
  imports: [RouterModule.forRoot(appRouters, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
