import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from '../../pages/main/main.component';
import { CreateComponent } from '../../pages/items/create/create.component';
import { AlreadyComponent } from '../../pages/items/already/already.component';
import { WaitForComponent } from '../../pages/items/wait-for/wait-for.component';
import { HomeComponent } from '../../pages/home/home.component';
import { PersonnelComponent } from '../../pages/items/personnel/personnel.component';


import { LeftMenuComponent } from '../../component/left-menu/left-menu.component';
import { NavigationBarComponent } from '../../component/navigation-bar/navigation-bar.component';
import { TableComponent } from '../../component/table/table.component';
import { PageNavigationComponent } from '../../component/page-navigation/page-navigation.component';
import { DashboardComponent } from '../../component/dashboard/dashboard.component';
import { JumnotronComponent } from '../../component/jumnotron/jumnotron.component';
@NgModule({
  declarations: [
    MainComponent,
    CreateComponent,
    AlreadyComponent,
    WaitForComponent,
    HomeComponent,
    LeftMenuComponent,
    NavigationBarComponent,
    TableComponent,
    PageNavigationComponent,
    DashboardComponent,
    JumnotronComponent,
    PersonnelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
