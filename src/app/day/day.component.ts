import { Component, OnInit, Input } from "@angular/core";
import { TimeService } from "../time.service";
import { DateTime } from "luxon";

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"],
})
export class DayComponent implements OnInit {
  @Input() day: any;
  @Input() activeDay: DateTime = null;

  constructor(private timeService: TimeService) {}

  ngOnInit() {}

  currentDay(day: DateTime) {
    const today = DateTime.local();
    return (
      today.day === day.day &&
      today.month === day.month &&
      today.year === day.year
    );
  }

  isActive(day: DateTime) {
    return (
      this.activeDay.day === day.day &&
      this.activeDay.month === day.month &&
      this.activeDay.year === day.year
    );
  }

  getTimeString(date: DateTime) {
    return this.timeService.getTimeString(date);
  }
}
