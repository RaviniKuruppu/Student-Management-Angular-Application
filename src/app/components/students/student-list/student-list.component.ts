import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  students: Student[]=[];
  constructor(private studentsService: StudentsService ){}
  
  ngOnInit(): void {
    this.studentsService.getAllStudents()
    .subscribe({
      next: (students) => {
        this.students= students;
        console.log(students)
      },
      error(err) {
        console.log(err)
      },
      
    })
  }

}
