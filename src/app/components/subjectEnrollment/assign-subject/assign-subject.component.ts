import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../../../models/enrollment.model';
import { SubjectEnrollmentService } from '../../../services/subjectEnrollmentService/subject-enrollment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from '../../../models/subject.model';
import { SubjectsService } from '../../../services/subjectService/subjects.service';

@Component({
  selector: 'app-assign-subject',
  templateUrl: './assign-subject.component.html',
  styleUrl: './assign-subject.component.css'
})
export class AssignSubjectComponent implements OnInit{
  assignSubjectRequest: Enrollment={
    studentId: '',
    subjectId: ''
  }

  subjects: Subject[]=[];
  constructor(private subjectEnrollmentService: SubjectEnrollmentService, private router: Router,private route:ActivatedRoute, private subjectsService: SubjectsService) {

    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const studentId = params.get('studentId');
      if (studentId) {
        this.assignSubjectRequest.studentId = studentId;
      }
    });

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

  assignSubject(){

    this.subjectEnrollmentService.assignSubject(this.assignSubjectRequest)
    .subscribe({
      next: (subject) => {
        this.router.navigate(['subjectEnrollment/enrollmentList'])
        console.log(subject);
      },
      error(err) {
        console.log(err)
      },
    });

  }

  goBack(): void {
    //window.history.back();
    this.router.navigate(['subjectEnrollment/enrollmentList']);
  }

}
