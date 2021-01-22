import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petservices',
  templateUrl: './petservices.component.html',
  styleUrls: ['./petservices.component.css']
})
export class PetservicesComponent implements OnInit {
  rover1: any = '../assets/img/rover1.jpg';
  rover: any = '../assets/img/rover.jpg';
  walking: any = '../assets/img/walking.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
