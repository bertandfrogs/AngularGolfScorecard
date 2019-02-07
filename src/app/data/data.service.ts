import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  players = [];
  course: string;
  tee: string;
  par = [];
  yards = [];
  hcp = [];
  playerNames = [];
  player1Scores = [];
  player2Scores = [];
  player3Scores = [];
  player4Scores = [];

}
