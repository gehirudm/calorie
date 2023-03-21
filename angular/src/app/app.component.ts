import { Component } from '@angular/core';
import { Diet } from './models/database.type';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public diets: Diet[] = [];

  constructor(private db: DatabaseService) {
    this.diets = db.memory.getDiets();
  }
}
