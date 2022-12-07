import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'Pvi Registration';
  students: any[] = [];

fakeArray = [1,2,3,4,5,6,6,7,8,9]
constructor(){
}

  ngOnInit(): void{
console.log("HI How are you ")
  this.getStudents();
  }

getStudents(): void{
console.log("I am getStudents")

   this.students = [
      {
      id: 1,
      idNumber: 1455,
      phoneNumber: 1455,
      firstName: "Sam",
      lastName: "Ben",
      email: "ben@gmail.com"
      },
      {
            id: 2,
            idNumber: 458,
            phoneNumber: 1455,
            firstName: "Sa23",
            lastName: "Ben2",
            email: "ben2@gmail.com"
            },
            {
                        id: 3,
                        idNumber: 55,
                        phoneNumber: 1455,
                        firstName: "Sa2333",
                        lastName: "Ben2",
                        email: "ben3@gmail.com"
                        }
    ];
  }
}
