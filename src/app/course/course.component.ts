import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import {Tee} from './tee';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],

})
export class CourseComponent implements OnInit {
    coursesList: Course;
    teeList: Tee;
    teeTypeList = [];
    courseSelected = false;
    teeSelected = false;
    playerSelected = false;
    playerCount = [0,1,2,3];
    newPlayerCount = [];
    playerNum: number;
    nameArray = [];


    constructor(private courseService: CourseService, private dataService: DataService){}

    ngOnInit(): void {
        this.getCourse();
    }

    getCourse(): void {
        this.courseService.getCourses().subscribe(
            courses => {
                this.coursesList = courses;
            },

        );
    }

    getSpecificCourse(id): void{
        this.teeTypeList = [];
        this.courseService.getSpecificCourse(id).subscribe(
            tee => {
                this.teeList = tee;
                for(let i = 0; i < tee.data.holes[0].teeBoxes.length; i++){
                    this.teeTypeList.push(tee.data.holes[0].teeBoxes[i].teeType);
                }
            }
        );
    }

    playerNumber(event) {
        this.playerNum = event.value;
        this.newPlayerCount = [];
        this.newPlayerCount = this.playerCount;
        this.newPlayerCount.splice(this.playerNum, 4 - this.playerNum);
        this.dataService.players = this.newPlayerCount;
        this.playerSelected = true;
    }

    chooseCourse(course) {
        if(course.value != undefined){
            this.dataService.course = course.value;
            this.getSpecificCourse(course.value);
            this.courseSelected = true;
        }
    }

    chooseTee(tee){
        let selectedTee = tee.value;
        this.dataService.tee = selectedTee;
        this.teeSelected = true;
    }

    submit(){
        this.getInfo();
        this.dataService.playerNames = this.nameArray;
    }

    getInfo(){
        this.dataService.par = [];
        this.dataService.yards = [];
        this.dataService.hcp = [];

        this.courseService.getSpecificCourse(this.dataService.course).subscribe(
            tee => {
                for(let i = 0; i < tee.data.holes.length; i++){
                    this.dataService.par.push(tee.data.holes[i].teeBoxes[this.dataService.tee].par);
                    this.dataService.yards.push(tee.data.holes[i].teeBoxes[this.dataService.tee].yards);
                    this.dataService.hcp.push(tee.data.holes[i].teeBoxes[this.dataService.tee].hcp);
                }
            }
        );
    }
}