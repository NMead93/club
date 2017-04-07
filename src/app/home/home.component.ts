import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  positionSearch: string = "all";

  constructor() { }

  ngOnInit() {
  }


  search(criteria: string) {
    this.positionSearch = criteria;
  }


}
