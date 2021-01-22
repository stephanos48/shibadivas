import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any = '../assets/img/shiba_inu2.jpg';
  history1: any = '../assets/img/shiba_inu.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
