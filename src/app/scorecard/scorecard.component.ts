import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  holes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  playerCount = [1,2,3,4];
  constructor() { }

  ngOnInit() {
  }

}
