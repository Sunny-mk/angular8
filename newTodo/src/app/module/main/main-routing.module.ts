import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AuthGuard } from '../../auth/auth.guard';
import { MainComponent } from '../../pages/main/main.component';
import { CreateComponent } from '../../pages/items/create/create.component';
import { AlreadyComponent } from '../../pages/items/already/already.component';
import { WaitForComponent } from '../../pages/items/wait-for/wait-for.component';
import { HomeComponent } from '../../pages/home/home.component';
import { PersonnelComponent } from '../../pages/items/personnel/personnel.component';



const mainRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent

      },
      {
        path: 'already',
        component: AlreadyComponent
      },
      {
        path: 'waitFor',
        component: WaitForComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'personnel',
        component: PersonnelComponent
      },
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
