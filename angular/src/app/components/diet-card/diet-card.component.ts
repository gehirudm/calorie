import { Component, Input } from '@angular/core';
import { Diet } from 'src/app/models/database.type';

@Component({
  selector: 'app-diet-card',
  templateUrl: './diet-card.component.html',
  styleUrls: ['./diet-card.component.css']
})
export class DietCardComponent {
  @Input()
  diet!: Diet;

  
}
