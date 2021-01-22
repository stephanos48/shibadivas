import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pastpuppies',
  templateUrl: './pastpuppies.component.html',
  styleUrls: ['./pastpuppies.component.css']
})
export class PastpuppiesComponent implements OnInit {
  tessa: any = '../assets/img/tessa-small.jpg';
  penny: any = '../assets/img/penny-sm.jpg';
  chandler: any = '../assets/img/chandler-sm1.jpg';
  rachel: any = '../assets/img/rachel-sm.jpg';
  joey: any = '../assets/img/joey-sm1.jpg';
  zach: any = '../assets/img/zack-sm1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
