import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';
import { StudentCreate } from '../models/studentCreate.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseApiUrl: string= environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseApiUrl + '/api/Student');
  }


  addStudent(addStudentRequest: StudentCreate): Observable<StudentCreate>{
    return this.http.post<StudentCreate>(this.baseApiUrl + '/api/Student/Creates',addStudentRequest)
  }

  getStudent(id: string): Observable<StudentCreate>{
    return this.http.get<StudentCreate>(this.baseApiUrl + '/api/Student/'+ id)
  }

  updateStudent(updateStudntRequest: StudentCreate): Observable<StudentCreate>{
    return this.http.put<StudentCreate>(this.baseApiUrl + '/api/Student/',updateStudntRequest)
  }

  deleteStudent(id: string): Observable<Student>{
    return this.http.delete<Student>(this.baseApiUrl + '/api/Student/'+ id)
  }

  
}
