import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
  styleUrls: ['./waitlist.component.css']
})
export class WaitlistComponent implements OnInit {
  waitlist: any = '../assets/img/waitlist.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
