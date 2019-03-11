import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }
  handleRemove(event){
    this.users = this.users.filter((user: User)=>{
      return user.id !== event;
    })
    console.log("remove button is clicked", event)
  }
}
