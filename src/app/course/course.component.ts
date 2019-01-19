import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],

})
export class CourseComponent implements OnInit {
    coursesList: Course[];
    teeList: Course;

    constructor(private courseService: CourseService){}

    ngOnInit(): void{
        this.getCourse();
    }

    getCourse(): void{
        this.courseService.getCourses().subscribe(
            courses => {
                this.coursesList = courses
            }
        );
    }

    getSpecificCourse(id): void{
        this.courseService.getSpecificCourse(id).subscribe(
            tee => {
                this.teeList = tee
            }
        );
    }
}
