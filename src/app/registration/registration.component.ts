import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: User = {
    name: "",
    city: "",
    country: ""
  };

  regForm: NgForm;
  isSubmitted: boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  onSubmit(formObj: NgForm) {
    this.isSubmitted = true;
    if(!this.regForm) {
      this.regForm = formObj;
    }
    this.dataService.users.push(this.model);
  }

  reset() {
    this.model = {
      name: "",
      city: "",
      country: ""
    };
    this.regForm.reset();
    this.isSubmitted = false;
  }
}