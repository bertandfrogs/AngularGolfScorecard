import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
    private url = 'https://golf-courses-api.herokuapp.com/courses';
    constructor(private httpClient: HttpClient) { }

    getCourses(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.url).pipe(
            tap(data => console.log("All: "+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        } else{
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
