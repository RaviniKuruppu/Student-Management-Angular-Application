import { Component, OnInit } from '@angular/core';
import { StudentCreate } from '../../../models/studentCreate.model';
import { StudentsService } from '../../../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit{
  addStudentRequest: StudentCreate ={
    id: '',
    firstName: '',
    lastName: '',
    age: 0,
    dob: '',
    address: ''
  }


  constructor(private studentService: StudentsService, private router:Router) {
    
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  addStudent(){
    this.studentService.addStudent(this.addStudentRequest)
    .subscribe({
      next: (student) => {
        //this.subjects= subjects;
        this.router.navigate(['students'])
        console.log(student);
      },
      error(err) {
        console.log(err)
      },
    });
    //console.log(this.addStudentRequest);
  }

  goBack(): void {
    //window.history.back();
    this.router.navigate(['students']);
  }

}
