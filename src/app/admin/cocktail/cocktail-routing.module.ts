import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CIndexComponent} from "./c-index/c-index.component";
import {CEditComponent} from "./c-edit/c-edit.component";
import {CAddComponent} from "./c-add/c-add.component";
import {CDeleteComponent} from "./c-delete/c-delete.component";

const routes: Routes = [
  { path: '', component: CIndexComponent },
  { path: 'edit/:cid', component: CEditComponent },
  { path: 'add', component: CAddComponent },
  { path: 'delete/:cid', component: CDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
