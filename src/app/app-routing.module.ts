import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { isSignedIn } from 'src/isSignedIn';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:LoginComponent  },
  {path:'userUpdate/:id' , component:UserUpdateComponent},
  {path:'users', component:UsersComponent},
  {path:'login', component:LoginComponent  },
  {path:'signUp', component:SignUpComponent},
  {path:'home', component:HomeComponent,canActivate:[isSignedIn]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
