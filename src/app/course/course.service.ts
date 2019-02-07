import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from './course';
import {Tee} from './tee';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
    private url = 'https://golf-courses-api.herokuapp.com/courses';

    constructor(private httpClient: HttpClient) { }

    getCourses(): Observable<Course> {
        return this.httpClient.get<Course>(this.url, {});
    }

    getSpecificCourse(id): Observable<Tee> {
        return this.httpClient.get<Tee>(`${this.url}/${id}`, {});

    }

    // getCourses(): Observable<Course[]> {
    //     return this.httpClient
    //         .get<Course[]>(this.url)
    //         .pipe(
    //             tap(data => console.log("All: "+ JSON.stringify(data))),
    //             catchError(this.handleError)
    //         );
    // }

    // selectCourse(id: number){
    //     this.selectedCourse = id;
    // }
    //
}
