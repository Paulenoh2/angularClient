import { Component, OnInit } from '@angular/core';
import { Student } from './shared/student.module';
import { StudentService } from './shared/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Pvi Registration';
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    console.log('HI How are you ');
    // this.getStudents();
    this.getAllStudents();
  }

  getAllStudents() {
    console.log('getAllStudents is called');

    this.studentService.getAllStudents().subscribe((result) => {
      console.log('Data: ', result);
      this.students = result;
    },error => {
      console.log('Error Occured while Getting Students: ', error);
    });
  }

  // getStudents(): void {
  //   console.log('I am getStudents');

  //   this.students = [
  //     {
  //       id: 1,
  //       idNumber: 1455,
  //       phoneNumber: 1455,
  //       firstName: 'Sam',
  //       lastName: 'Ben',
  //       email: 'ben@gmail.com',
  //     },
  //     {
  //       id: 2,
  //       idNumber: 458,
  //       phoneNumber: 1455,
  //       firstName: 'Sa23',
  //       lastName: 'Ben2',
  //       email: 'ben2@gmail.com',
  //     },
  //     {
  //       id: 3,
  //       idNumber: 55,
  //       phoneNumber: 1455,
  //       firstName: 'Sa2333',
  //       lastName: 'Ben2',
  //       email: 'ben3@gmail.com',
  //     },
  //   ];
  // }
}
