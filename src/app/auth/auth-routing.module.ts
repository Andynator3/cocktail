import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogoutComponent} from "./logout/logout.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},

  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
