import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../models/subject.model';
import { SubjectsService } from '../../../services/subjectService/subjects.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent implements OnInit{
  subjects: Subject[]=[
    {
      id:"MA-5505",
      name:"Maths"
    }
  ];

  constructor(private subjectsService: SubjectsService ){}
  
  ngOnInit(): void {
    this.subjectsService.getAllSubjects()
    .subscribe({
      next: (subjects) => {
        this.subjects= subjects;
        console.log(subjects)
      },
      error(err) {
        console.log(err)
      },
      
    })
    
  }

}
