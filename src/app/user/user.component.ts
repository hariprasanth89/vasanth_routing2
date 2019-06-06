import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    console.log(this.route);
    let userIndex = this.route.params['value'].uname;
    this.user = this.dataService.users[+userIndex];
  }


}