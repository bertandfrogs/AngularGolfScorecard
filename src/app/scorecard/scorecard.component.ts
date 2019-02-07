import { Component, OnInit } from '@angular/core';
import {DataService} from '../data/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  holes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

  constructor(private data: DataService, private router: Router) { }

  course = this.data.course;
  tee = this.data.tee;

  parArray= this.data.par;
  yardArray = this.data.yards;
  hcpArray = this.data.hcp;
  playerNames = this.data.playerNames;
  playerCount = this.data.players;

  p1Score = this.data.player1Scores;
  p2Score = this.data.player2Scores;
  p3Score = this.data.player3Scores;
  p4Score = this.data.player4Scores;

  p1 = 0;
  p2 = 0;
  p3 = 0;
  p4 = 0;

  inScore = 0;
  outScore = 0;
  totalScore = 0;

  ngOnInit() {
      if(this.data.course == undefined){
          this.router.navigate(['/course']);
      }
  }

  getInScore(){
      this.inScore = 0;
      for(let i = 0; i < 9; i++){
          this.inScore += this.parArray[i];
      }
      console.log("in score: "+ this.inScore);
  }
  getOutScore(){
      this.outScore = 0;
      for(let i = 9; i < this.parArray.length; i++){
          this.outScore += this.parArray[i];
      }
      console.log("out score: " + this.outScore);
  }
  getTotalScore(){
      this.totalScore = 0;
      for(let i = 0; i < this.parArray.length; i++){
          this.totalScore += this.parArray[i];
      }
      console.log("total score: " + this.totalScore);
  }

  getPlayerScores(){
      //Player 1
      console.log(this.p1Score.length);
      if(this.p1Score.length == 18){
          this.p1 = 0;
          for(let i = 0; i < this.p1Score.length; i++){
              this.p1 += Number(this.p1Score[i]);
          }
          console.log(this.p1);
      }
      else{
          console.log("something went wrong");
      }

  }
  getAllScores(){
      this.getTotalScore();
      this.getInScore();
      this.getOutScore();
      this.getPlayerScores();
  }
}
