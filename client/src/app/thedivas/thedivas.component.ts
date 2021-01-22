import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thedivas',
  templateUrl: './thedivas.component.html',
  styleUrls: ['./thedivas.component.css']
})
export class ThedivasComponent implements OnInit {
  persephone: any = '../assets/img/persephoneg-sm.jpg';
  helen: any = '../assets/img/helen1-sm.jpg';
  april: any = '../assets/img/april2-sm.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
