import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../../../models/enrollment.model';
import { SubjectEnrollmentService } from '../../../services/subjectEnrollmentService/subject-enrollment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unassign-subject',
  templateUrl: './unassign-subject.component.html',
  styleUrl: './unassign-subject.component.css'
})
export class UnassignSubjectComponent implements OnInit{
  unassignSubjectRequest: Enrollment={
    studentId: '',
    subjectId: ''
  }
  
  constructor(private subjectEnrollmentService: SubjectEnrollmentService, private router: Router,private route:ActivatedRoute) { 
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const studentId = params.get('studentId');
      const subjectId = params.get('subjectId');
      
      if (studentId && subjectId) {
        this.unassignSubjectRequest.studentId = studentId;
        this.unassignSubjectRequest.subjectId = subjectId;
      }
    });
  }

  unassignSubject(){
    this.subjectEnrollmentService.unassignSubject(this.unassignSubjectRequest)
    .subscribe({
      next: (subject) => {
        this.router.navigate(['subjectEnrollment/enrollmentList'])
        console.log(subject);
      },
      error(err) {
        console.log(err)
      },
    });
    //console.log(this.assignSubjectRequest);
  }


  goBack(): void {
    //window.history.back();
    this.router.navigate(['subjectEnrollment/enrollmentList']);
  }

}
