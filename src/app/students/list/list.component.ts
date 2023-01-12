import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/student.module';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  studentTitle: string = '';
 
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    console.log('HI How are you ');
    this.getAllStudents();

  }


  getAllStudents() {
    console.log('getAllStudents is called');

    this.studentService.getAllStudents().subscribe(
      (result) => {
        console.log('Data: ', result);
        this.students = result;
      },
      (error) => {
        console.log('Error Occured while Getting Students: ', error);
        alert('Error Occured while Getting Students');
      }
    );
  }

  deleteStudentById(id: number): void {
    this.studentService.deleteStudentById(id).subscribe(
      (result) => {
        this.getAllStudents();
        alert('student deleted successfull');
      },
      (error) => {
        console.log(error);
        this.getAllStudents();
        //  alert('the was an error ');
      }
    );
  }

  populateStudent(student: Student): void {
    this.studentTitle = 'Update';
    this.router.navigate(['/student-edit', student.id]);

  }


  showCreateForm() {
    this.studentTitle = 'Create';
    this.router.navigate(['/student-create']);
  }
}
