import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// @Injectable({providedIn: 'root'})
export class PassUsers {
    usersArray = [];

    constructor() {}

    transformUsersObjToArray(usersObj: any[]) {
        this.usersArray = Object.keys(usersObj).map(index => {
            let user = usersObj[index];
            return user;
          });
          for (let user of this.usersArray) {
            console.log(user.name);
          }
          return this.usersArray;
    }

    
}

