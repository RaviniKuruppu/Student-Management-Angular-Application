import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../services/students.service';
import { StudentCreate } from '../../../models/studentCreate.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit{

  studentDetails: StudentCreate ={
    id: '',
    firstName: '',
    lastName: '',
    age: 0,
    dob: '',
    address: ''
  }
 
  constructor(private route:ActivatedRoute, private studentservice: StudentsService,private router: Router) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id= params.get('id');
        if (id) {
          console.log(id)
          this.studentservice.getStudent(id)
          .subscribe({
            next: (response) =>{
              this.studentDetails= response;
            }
          })
        }
      }
    })
    
  }

  updateStudent(){
    this.studentservice.updateStudent(this.studentDetails)
    .subscribe({
      next: (response) => {
        //this.subjects= subjects;
        this.router.navigate(['students'])
        console.log(response);
      }

    })
    
  }

  deleteStudent(id:string){
    this.studentservice.deleteStudent(id)
    .subscribe({
      next: (response) => {
        //this.subjects= subjects;
        this.router.navigate(['students'])
        console.log(response);
      }
    })
  }

}
