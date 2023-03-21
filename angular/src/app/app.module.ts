import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dietFoodItemPipe } from './pipes/dietFoodItem.pipe';
import { DietCardComponent } from './components/diet-card/diet-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    dietFoodItemPipe,
    DietCardComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
