import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers: User[];
  users: User[];
 @Input() username: string;
 @Input() pageNo: number;
 @Input() pageSize: number;

  
  constructor(private dataService: DataService) { }
  test = () =>{
    console.log(this.pageNo,  this.pageSize);
    this.dataService.getUsers(this.pageNo, this.pageSize).subscribe(res => {
      console.log(res);
      this.allUsers = res.data;
      //console.log(this.allUsers);
    });
}

  ngOnInit() {
    this.users = this.dataService.users;
   console.log(this.username);
    this.dataService.getUsers(1, 20).subscribe(res => {
      console.log(res);
      this.allUsers = res.data;
      //console.log(this.allUsers);
    });

  }

}