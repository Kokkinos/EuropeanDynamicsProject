import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PassUsers } from '../passUsers.service';
import { User } from '../user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnChanges {

  // @Input() usersObj = []; // it will be an array of arrays 'users[0][0].name' its the actual name

  users = [];
 
  
  constructor(private passUsers: PassUsers) { }

  ngOnInit(): void {
    this.users = [...this.passUsers.usersArray];
    this.users.splice(-1,1);
    console.log(this.users);
  }

  ngOnChanges() {
   // console.log(this.users[0].name);
   // this.trasformUsersObjectToArray();

  }

}




