import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userConnected: any;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.userConnected=JSON.parse(localStorage.getItem('userConnected') || '{}');

  }
  logOut(){
    localStorage.removeItem('userConnected');
    this.router.navigateByUrl('/login')
  }
}
