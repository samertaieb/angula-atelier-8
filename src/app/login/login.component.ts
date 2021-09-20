import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin:FormGroup;
  users: any;
  emailUser: any;
  user: any
  passwordUser: any;
  constructor(private userservice:UserService,private router : Router) { }

  ngOnInit(): void {
    console.log("z");
    
    this.userLogin=new FormGroup({
      email:new FormControl(''),
     password:new FormControl(''),
  });
  }
  login(){
    this.users=JSON.parse(localStorage.getItem('users') || '[]');
    console.log(this.users);
    
    this.user=this.users.find((x:any)=>x.email==this.userLogin.controls.email.value && x.password==this.userLogin.controls.password.value);
    if(this.user){
      localStorage.setItem('userConnected',JSON.stringify(this.user));

      this.router.navigateByUrl('/home')
    }
    else{
      alert('mafamech')
    }
  }
 
  

}
