import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectsService } from '../../../services/subjectService/subjects.service';
import { Subject } from '../../../models/subject.model';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrl: './edit-subject.component.css'
})
export class EditSubjectComponent implements OnInit{

  subjectDetails: Subject={
    id: '',
    name: ''
  }

  constructor(private route:ActivatedRoute,private router: Router, private subjectService: SubjectsService ) {
      
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id= params.get('id');
        if (id) {
         this.subjectService.getSubject(id)
         .subscribe({
          next: (response) =>{
            this.subjectDetails= response;
          }
        })
        }
      }
    })
  }

  updateSubject(){
    this.subjectService.updateSubject(this.subjectDetails)
    .subscribe({
      next: (response) => {
        //this.subjects= subjects;
        this.router.navigate(['subjects'])
        console.log(response);
      }

    })
  }

  deleteSubject(id:string){
    this.subjectService.deleteSubject(id)
    .subscribe({
      next: (response) => {
        //this.subjects= subjects;
        this.router.navigate(['subjects'])
        console.log(response);
      }
    })
  }

}
