import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/models/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userFormUpdate:FormGroup
  Users:Utilisateur[]=[];
  idUser:any;
  user:Utilisateur;
  // userForm: any;
  constructor(private us:UserService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    
    
   this.idUser = this.route.snapshot.paramMap.get('id');
    this.us.getUserById(this.idUser).subscribe(res=>{this.user=JSON.parse(JSON.stringify(res))},
   err=>{},
   ()=>{
    console.log(this.user);
     this.userFormUpdate=new FormGroup({
      id : new FormControl (this.user.id),
      name: new FormControl(this.user.name),
      username:new FormControl(this.user.username),
      email:new FormControl(this.user.email) 
  })
   })
    
}
Modifier(){
  console.log(this.user);
  
  this.us.updateUser(this.user,this.idUser).subscribe(res=>{console.log(res)}, 
  err=>{},
  ()=>{
     this.router.navigateByUrl('/users')
    }
  
    
   )
}

}
