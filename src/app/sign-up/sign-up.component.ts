import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userSignUp: FormGroup;
  user:any;
  users:any []=JSON.parse(JSON.stringify(localStorage.getItem('users'))) || [];
  constructor(private us :UserService,private router : Router) { }

  ngOnInit(): void {
    
      this.userSignUp=new FormGroup({
        email:new FormControl(''),
       password:new FormControl(''),
    });
    }


    register(){
     
     this.users= this.us.register(this.users,this.userSignUp.value)
      localStorage.setItem('users',JSON.stringify(this.users));
      this.router.navigateByUrl('/login')
   }
  }


