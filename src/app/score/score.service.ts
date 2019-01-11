import { Injectable } from '@angular/core';
import {Score} from './score';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private scoreRef: AngularFireObject<Score>;

  constructor(private db: AngularFireDatabase) {
    this.scoreRef = this.db.object<Score>('score');
  }

  getScoreObservable(): Observable<Score> {
    return this.scoreRef.valueChanges();
  }

  saveScore(company: Score) {
    this.scoreRef.set(company);
  }
}
