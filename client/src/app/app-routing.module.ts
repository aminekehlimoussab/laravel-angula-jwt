import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';


const appRoutes : Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'singup',
    component : SignupComponent
  },
  {
    path : 'profile',
    component : ProfilComponent
  },
  {
    path : 'request-password-reset',
    component : RequestResetComponent
  },
  {
    path : 'response-password-reset',
    component : ResponseResetComponent
  },
  
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],

})

export class AppRoutingModule { }
