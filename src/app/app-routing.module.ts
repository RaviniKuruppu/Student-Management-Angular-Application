import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { SubjectListComponent } from './components/subjects/subject-list/subject-list.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { AddSubjectComponent } from './components/subjects/add-subject/add-subject.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';
import { EditSubjectComponent } from './components/subjects/edit-subject/edit-subject.component';
import { HomeScreenComponent } from './components/home/home-screen/home-screen.component';
import { AssignSubjectComponent } from './components/subjectEnrollment/assign-subject/assign-subject.component';
import { UnassignSubjectComponent } from './components/subjectEnrollment/unassign-subject/unassign-subject.component';
import { EnrollmentListComponent } from './components/subjectEnrollment/enrollment-list/enrollment-list.component';


const routes: Routes = [
  {
    path:'home',
    component: HomeScreenComponent
},
  {
    path:'',
    component: HomeScreenComponent
},
{
    path:'students',
    component: StudentListComponent
},
{
    path:'students/add',
    component: AddStudentComponent
},
{
  path:'students/edit/:id',
  component: EditStudentComponent
},
{
    path:'subjects',
    component: SubjectListComponent
},
{
    path:'subjects/add',
    component: AddSubjectComponent
},
{
    path:'subjects/edit/:id',
    component: EditSubjectComponent
},
{
    path:'subjectEnrollment/assign/:studentId',
    component: AssignSubjectComponent
},
{
    path:'subjectEnrollment/unassign/:studentId/:subjectId',
    component: UnassignSubjectComponent
},
{
    path:'subjectEnrollment/enrollmentList',
    component: EnrollmentListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
