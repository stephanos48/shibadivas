import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.css']
})
export class PuppyComponent implements OnInit {
  tessa: any = '../assets/img/tessa-small-sold.jpg';
  teresa: any = '../assets/img/teresa-sm1.jpg';
  penny: any = '../assets/img/penny-sm1.jpg';
  shiba2: any = '../assets/img/shiba2.jpg';
  joey: any = '../assets/img/joey-sm1.jpg';
  zach: any = '../assets/img/zack-sm1.jpg';
  heidi: any = '../assets/img/h3.png';
  teresa1: any = '../assets/img/t1.png';
  michael: any = '../assets/img/michael1.JPG';
  angela: any = '../assets/img/angela4.JPG';
  dwight: any = '../assets/img/dwight3.JPG';
  erin: any = '../assets/img/erin4.JPG';
  pam: any = '../assets/img/pam3.JPG';
  pete: any = '../assets/img/pete5.JPG';
  jim: any = '../assets/img/jim3.JPG';

  constructor() { }

  ngOnInit(): void {
  }

}
