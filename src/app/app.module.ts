import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SubjectListComponent } from './components/subjects/subject-list/subject-list.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { AddSubjectComponent } from './components/subjects/add-subject/add-subject.component';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';
import { EditSubjectComponent } from './components/subjects/edit-subject/edit-subject.component';
import { HomeScreenComponent } from './components/home/home-screen/home-screen.component';
import { AssignSubjectComponent } from './components/subjectEnrollment/assign-subject/assign-subject.component';
import { UnassignSubjectComponent } from './components/subjectEnrollment/unassign-subject/unassign-subject.component';
import { EnrollmentListComponent } from './components/subjectEnrollment/enrollment-list/enrollment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    SubjectListComponent,
    AddStudentComponent,
    AddSubjectComponent,
    EditStudentComponent,
    EditSubjectComponent,
    HomeScreenComponent,
    AssignSubjectComponent,
    UnassignSubjectComponent,
    EnrollmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
