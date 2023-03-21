import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Diet, User } from './models/database.type';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public diets: Diet[] = [];
  public users: User[] = [];

  //Forms
  public createUserForm!: FormGroup;

  constructor(private db: DatabaseService, private fb: FormBuilder) {
    this.diets = db.memory.getDiets();
    this.users = db.memory.getUsers();
  }

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    })
  }

  /**
   * createUser
   */
  public createUser() {
    if (this.createUserForm.valid) {
      this.db.memory.createUser(this.createUserForm.value.firstname, this.createUserForm.value.lastname);
    }
  }
}
