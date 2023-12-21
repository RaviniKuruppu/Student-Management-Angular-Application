import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../../models/subject.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  baseApiUrl: string= environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.baseApiUrl + '/api/Subject');
  }

  addSubject(addSubjectRequest: Subject): Observable<Subject>{
    return this.http.post<Subject>(this.baseApiUrl + '/api/Subject/Creates',addSubjectRequest)
  }

  getSubject(id: string): Observable<Subject>{
    return this.http.get<Subject>(this.baseApiUrl + '/api/Subject/'+ id)
  }

  updateSubject(updateSubjectRequest: Subject): Observable<Subject>{
    return this.http.put<Subject>(this.baseApiUrl + '/api/Subject/',updateSubjectRequest)
  }

  deleteSubject(id: string): Observable<Subject>{
    return this.http.delete<Subject>(this.baseApiUrl + '/api/Subject/'+ id)
  }
}
