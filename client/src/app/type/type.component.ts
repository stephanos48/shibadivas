import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  cream: any = '../assets/img/rover1.jpg';
  red: any = '../assets/img/rover.jpg';
  sesame: any = '../assets/img/walking.jpg';
  blacktan: any = '../assets/img/walking.jpg';
  
  constructor() { }

  ngOnInit(): void {
  }

}
