import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import {CourseComponent} from './course/course.component';

const routes: Routes = [
  {
      path: 'course',
      component: CourseComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'scorecard',
    component: ScorecardComponent
  },
  { path: "",
    redirectTo: "course",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
