import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { LoginComponent } from './login/login.component';


const routes : Routes=[
  {path:'create', component: CreateRegistrationComponent},
  {path:'login',  component: LoginComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
