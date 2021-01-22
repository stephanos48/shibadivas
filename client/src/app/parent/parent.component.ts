import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  zeedonk: any = '../assets/img/zeedonk2-sm.jpg';
  heidi: any = '../assets/img/heidi1-sm.jpg';
  bruno: any = '../assets/img/bruno-s.jpg';
  khalessi: any = '../assets/img/khalessi1.jpg';
  teresa: any = '../assets/img/teresa1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
