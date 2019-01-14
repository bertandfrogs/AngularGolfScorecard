import { Component, OnInit } from '@angular/core';
import {Course} from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    courses: Course[];
    constructor(private courseService: CourseService){}

    ngOnInit(): void {
        this.getCourse();
        // this.courseService.getCourses().subscribe(
        //    courses => this.courses = courses,
        //     error => this.errorMessage = <any>error
        // )
    }

    getCourse(): void{
        this.courseService.getCourses().subscribe(
            courses => this.courses = courses
        )
    }
}
