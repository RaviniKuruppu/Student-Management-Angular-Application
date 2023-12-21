import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import { Subject } from '../../../models/subject.model';
import { StudentsService } from '../../../services/students.service';
import { SubjectEnrollmentService } from '../../../services/subjectEnrollmentService/subject-enrollment.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrl: './enrollment-list.component.css'
})
export class EnrollmentListComponent implements OnInit{
  students: Student[]=[];
  subjects: Subject[]=[];
  constructor(private studentsService: StudentsService,private subjectEnrollmentService: SubjectEnrollmentService ){}

  ngOnInit(): void {
    this.studentsService.getAllStudents().subscribe({
      next: (students) => {
        this.students = students;
        console.log(students);

        this.students.forEach((student) => {
          this.subjectEnrollmentService.getSubjectList(student.id).subscribe({
            next: (subjects) => {
              student.enrolledSubjects = subjects;


            },
            error: (err) => {
              console.log(err);
            },
          });
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
