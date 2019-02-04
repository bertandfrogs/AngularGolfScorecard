import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import {Tee} from './tee';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],

})
export class CourseComponent implements OnInit {
    coursesList: Course[];
    teeList: Tee;
    teeTypeList = [];
    courseSelected = false;

    constructor(private courseService: CourseService){}

    ngOnInit(): void{
        this.getCourse();
    }

    getCourse(): void{
        this.courseService.getCourses().subscribe(
            courses => {
                this.coursesList = courses;
                console.log(this.coursesList);
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
                console.log(this.teeTypeList);
                console.log(tee.data.holes[0].teeBoxes[0]);

            }
        );
    }

    playerNumber(event) {
        let playerNum = event.value;
    }

    chooseCourse(courseId) {
        if(courseId != undefined){
            this.courseSelected = true;
            this.getSpecificCourse(courseId);
        }
    }

    chooseTee(tee){
        let selectedTee = tee.value;
        console.log(selectedTee);
    }
}