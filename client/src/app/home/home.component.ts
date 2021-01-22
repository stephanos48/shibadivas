import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;
  shiba2: any = '../assets/img/shiba2.jpg';
  teresa: any = '../assets/img/teresa.JPG';
  zeedonk: any = '../assets/img/helen&perse2019.jpg';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  /*
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users);
  }
  */
 
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
