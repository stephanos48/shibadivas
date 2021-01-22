import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {
  shiba: any = '../assets/img/zeedonk3-sm.jpg';
  shiba1: any = '../assets/img/tessa-sm-close.jpg';
  shiba2: any = '../assets/img/penny-sm3.png';

  constructor() { }

  ngOnInit(): void {
  }

}
