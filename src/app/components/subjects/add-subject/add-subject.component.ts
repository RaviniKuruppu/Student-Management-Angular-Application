import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../models/subject.model';
import { SubjectsService } from '../../../services/subjectService/subjects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.css'
})
export class AddSubjectComponent implements OnInit{
  addSubjectRequest: Subject ={
    id: '',
    name: '',
  }

 
  constructor(private subjectService: SubjectsService, private router: Router) {
    
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  addSubject(){
    this.subjectService.addSubject(this.addSubjectRequest)
    .subscribe({
      next: (subject) => {
        //this.subjects= subjects;
        this.router.navigate(['subjects'])
        console.log(subject);
      },
      error(err) {
        console.log(err)
      },
    });
    //console.log(this.addSubjectRequest)
  }

  goBack(): void {
    //window.history.back();
    this.router.navigate(['/subjects']);
  }

}
