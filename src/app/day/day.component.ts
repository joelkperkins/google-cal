import { Component, OnInit, Input } from "@angular/core";
import { DateTime } from "luxon";

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"],
})
export class DayComponent implements OnInit {
  @Input() day: any;

  constructor() {}

  ngOnInit() {}

  currentDay(day: DateTime) {
    const today = DateTime.local();
    return (
      today.day === day.day &&
      today.month === day.month &&
      today.year === day.year
    );
  }
}
