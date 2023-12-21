import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Enrollment } from '../../models/enrollment.model';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from '../../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectEnrollmentService {

  baseApiUrl: string= environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getSubjectList(id: string): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.baseApiUrl + '/api/Student/SubjectList/'+ id);
  }

  assignSubject(assignSubjectRequest: Enrollment): Observable<Enrollment>{
    return this.http.post<Enrollment>(this.baseApiUrl + '/api/Student/AssignSubject',assignSubjectRequest)
  }

  unassignSubject(unassignSubjectRequest: Enrollment): Observable<Enrollment>{
    return this.http.post<Enrollment>(this.baseApiUrl + '/api/Student/UnassignSubject',unassignSubjectRequest)
  }
}
