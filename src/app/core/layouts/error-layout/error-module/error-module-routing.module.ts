import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorLayoutComponent } from '../error-layout.component';
import { NotfoundComponent } from 'src/app/pages/notfound/notfound.component';


const routes: Routes = [
    {path:'', component: ErrorLayoutComponent,children:[
    {path:'', redirectTo:'notfound',pathMatch:'full'},
    {path:'**', redirectTo:'notfound',pathMatch:'full'},
    {path:'notfound', component:NotfoundComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorModuleRoutingModule { }
