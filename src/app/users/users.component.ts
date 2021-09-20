import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { Utilisateur } from 'src/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users:Utilisateur[]=[];
  affiche:boolean;
  userForm:FormGroup;
  user : Utilisateur
  constructor(private us:UserService) {
   
   }


  ngOnInit() {
    this.userForm=new FormGroup({
      id : new FormControl (''),
      name: new FormControl(''),
      username:new FormControl(''),
      email:new FormControl('')
  });
    this.us.getUsers().subscribe(result=>{this.Users=JSON.parse(JSON.stringify(result))
    // console.log(result);
    },
    error=>{alert("le serveur ne repond pas")},
    ()=>{console.log("cht7eb ")}
    )
    
  
  }
  suppression(id:any){
    this.us.deleteUser(id).subscribe(result=>{console.log(result);},
    error=>{console.log("le serveur ne repond pas")},
    ()=>{
      // console.log("z");
      
      this.ngOnInit()
    })
  }
  
  ajouter(){
 console.log(this.userForm.value);
 this.user=this.userForm.value
 this.us.addUser(this.user).subscribe(result=>{console.log(result);},
 error=>{console.log("le serveur ne repond pas")},
 ()=>{
   this.ngOnInit()
 } )
//  console.log(UsersComponent);

   

  }
  
  

}
