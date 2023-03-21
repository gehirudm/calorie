import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dietFoodItemPipe } from './pipes/dietFoodItem.pipe';
import { DietCardComponent } from './components/diet-card/diet-card.component';

@NgModule({
  declarations: [
    AppComponent,
    dietFoodItemPipe,
    DietCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
