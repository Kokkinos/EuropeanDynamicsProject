import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PassUsers } from './passUsers.service';


const appRoutes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'users/:userId', component: PostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PassUsers],
  bootstrap: [AppComponent]
})
export class AppModule { }
