import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchUsers } from './fetchUsers.service';
import { PassUsers } from './passUsers.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EuropeanDynamicsProject';
  loadedUsers = [];
  isFetching = false;

  constructor(private http: HttpClient, 
              private fetchUsers: FetchUsers, 
              private passUsers: PassUsers,
              private router: Router) {


  }
  // subscription here with navigate does not allow me to navigate using parameters to PostsComponent via url
  ngOnInit() {
    this.isFetching = true;
     this.fetchUsers.fetchUsers().subscribe(users => {
       this.isFetching = false;
       this.loadedUsers = users[0];
       // console.log(users[0]);
       this.passUsers.transformUsersObjToArray(this.loadedUsers);
       this.router.navigate(['users'])  
     });

    // this.fetchUsers.onSubscribe();
}



 

}
