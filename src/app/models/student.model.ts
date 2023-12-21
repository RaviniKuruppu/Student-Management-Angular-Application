import { Subject } from "./subject.model";

export interface Student{
    id: string;
    fullName: string;
    age: number;
    dob: string;
    address:string;
    enrolledSubjects?: Subject[];
}