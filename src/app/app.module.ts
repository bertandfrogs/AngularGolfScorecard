import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCardModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule, MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CourseComponent } from './course/course.component';
import { FormsModule} from '@angular/forms';
import { PlayerNamePipe } from './pipe/player-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ScorecardComponent,
    CourseComponent,
    PlayerNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
