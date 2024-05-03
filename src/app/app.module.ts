import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DenemeComponent } from './deneme/deneme/deneme.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { QuestionlistComponent } from './features/questionlist/questionlist.component';
import { ResultComponent } from './features/result/result.component';
import { ProfileComponent } from './features/profile/profile.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './features/register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { AuthComponent } from './core/auth/auth/auth.component';
import {MatTableModule} from "@angular/material/table";
import { FinishExamComponent } from './features/finish-exam/finish-exam.component';
// import {EventService} from "../../services/event-service.service";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { HomePageComponent } from './features/home-page/home-page.component';
import {MatDividerModule} from '@angular/material/divider';
import { ProfilComponent } from './features/profile/profil/profil.component';
import { PhotoComponent } from './features/profile/photo/photo.component';
import { NotificationsComponent } from './features/profile/notifications/notifications.component';
import { ExamaanalysisComponent } from './features/profile/examaanalysis/examaanalysis.component';
import { ExamResultComponent } from './features/profile/exam-result/exam-result.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';






@NgModule({
  declarations: [
    AppComponent,
    // DenemeComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    QuestionlistComponent,
    ResultComponent,
    ProfileComponent,
    // QuestionsComponent,
    RegisterComponent,
    AuthComponent,
    FinishExamComponent,
    HomePageComponent,
    ProfilComponent,
    PhotoComponent,
    NotificationsComponent,
    ExamaanalysisComponent,
    ExamResultComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        HttpClientModule,
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatSnackBarModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
