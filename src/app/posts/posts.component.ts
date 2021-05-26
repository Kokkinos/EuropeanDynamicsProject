import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassUsers } from '../passUsers.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  date = new Date();
  
  posts = [
    {id: 1, userId: 3, createdAt: this.date, title: 'Content', body: 'text'},
    {id: 1, userId: 3, createdAt: this.date, title: 'Content', body: 'text'},
    {id: 1, userId: 3, createdAt: this.date, title: 'Content', body: 'text'},
    {id: 1, userId: 3, createdAt: this.date, title: 'Content', body: 'text'}
  ];

  users = []


  constructor(private passUsers: PassUsers, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = [...this.passUsers.usersArray];
    this.users.splice(-1,1);
    // console.log(this.users);
    console.log(this.route.snapshot.params.id);
  }

  // ngOnChanges() {
  //   this.users = [...this.passUsers.usersArray];
  //   // console.log(this.users);
  //   console.log(this.route.snapshot.params.id);
  // }


}
