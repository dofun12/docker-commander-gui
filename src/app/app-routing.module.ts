import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainerListComponent} from "./component/container-list/container-list.component";

const routes: Routes = [
  {path: 'containers', component: ContainerListComponent},
  {path: '', redirectTo: '/containers', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
