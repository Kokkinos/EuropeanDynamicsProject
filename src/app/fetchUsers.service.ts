import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class FetchUsers {
    loadedUsers = []


    constructor(private http: HttpClient) {}

    // onSubscribe() {
    //   this.fetchUsers().subscribe(users => this.loadedUsers = users[0]);
    //   console.log(this.loadedUsers);
    // }


    // {[key:string]: User}
    fetchUsers() {
      return this.http.get('http://5da8543fe44c790014cd4b86.mockapi.io/users')
      .pipe(map(responseUsersData => {
        const usersArray = [];
        for (const key in responseUsersData) {
          if (responseUsersData.hasOwnProperty(key)) {
            usersArray.push({...responseUsersData[key], id:key});
          }
        }
       
         return usersArray;
      }))
    }

}