import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { DayComponent } from "./day/day.component";
import { MonthSelectComponent } from './date-control/month-select/month-select.component';

@NgModule({
  declarations: [AppComponent, CalendarComponent, DayComponent, MonthSelectComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
