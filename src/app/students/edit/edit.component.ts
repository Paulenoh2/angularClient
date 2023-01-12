import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/student.module';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  idNumber: string | undefined = '';
  firstName: string | undefined = '';
  lastName: string | undefined = '';
  email: string | undefined = '';
  phoneNumber: string | undefined = '';
  id: number | null = 0;

  studentTitle: string = 'Create';

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    let param = activatedRoute.snapshot.params['id'];
    if (param) {
      this.studentTitle = 'Edit';
      this.id = param;
      this.getStudentById();
    } else {
      this.studentTitle = 'Create';
    }
  }

  ngOnInit(): void {}

  getStudentById() {
    if (this.id) {
      this.studentService.getStudentById(this.id).subscribe(
        (student: Student) => {
          this.id = student.id;
          this.idNumber = student.idNumber;
          this.firstName = student.firstName;
          this.lastName = student.lastName;
          this.email = student.email;
          this.phoneNumber = student.phoneNumber;
        },
        (error) => {
          alert('Error While getting student with id: ' + this.id);
        }
      );
    }
  }
  submit() {
    if (this.id) {
      this.updateStudent();
      this.id = null;
    } else {
      this.createStudent();
    }
  }

  createStudent(): void {
    console.log('id number is ', this.idNumber);
    console.log('id number is ', this.firstName);
    console.log('id number is ', this.lastName);
    console.log('id number is ', this.email);
    console.log('id number is ', this.phoneNumber);

    let student: Student = new Student(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber,
      this.idNumber
    );
    student.id = null;

    this.studentService.createStudent(student).subscribe(
      (res) => {
        alert('Successfully Created student');
        this.routeToList();
      },
      (error) => {
        alert('Failed to create student');
      }
    );
  }

  updateStudent(): void {
    let student: Student = new Student(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber,
      this.idNumber,
      this.id
    );

    this.studentService.updateStudent(student).subscribe(
      (res) => {
        alert('Successfully updated student');
        this.routeToList();
      },
      (error) => {
        alert('Failed to update student');
      }
    );
  }

  routeToList(){
    this.router.navigate(['student-list']);
  }
}
