import { Component, OnInit } from "@angular/core";
import { TimeService } from "../time.service";
import { DateTime } from "luxon";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
})
export class CalendarComponent implements OnInit {
  name: string = "May";
  numDays: number = 31;
  firstDay: string = "Sunday";
  currDay: number = 0;
  days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  calDays: any[] = [];
  weeks: any[] = [];
  newEvent: boolean = false;
  newEventDay: any;
  eName: string = "";
  eTime: any = null;

  calendar: {
    date: DateTime;
    scale: string;
    units: string;
    content: any[];
    scaleSet: any[];
  } = {
    date: null,
    scale: "month",
    units: "days",
    content: null,
    scaleSet: null,
  };

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.timeService.currentDate.subscribe((date) => {
      this.calendar.date = date;
      this.initCalendar(this.calendar.scale);
    });
  }

  initCalendar(scale: string = "month") {
    if (scale === "month") {
      this.calendar.content = this.buildMonthDays();
      this.calendar.scaleSet = this.buildWeeks(
        this.calendar.content,
        this.calendar.date.daysInMonth
      );
    }
  }

  buildMonthDays() {
    return new Array(this.calendar.date.daysInMonth)
      .fill({})
      .map((day, index) => {
        let currentDay = this.calendar.date
          .startOf("month")
          .plus({ days: index });
        day = {
          date: currentDay,
          name: currentDay.weekdayLong,
          num: currentDay.day,
          index: index,
          events: [],
        };

        return day;
      });
  }

  buildWeeks(days: any[], numberOfDays: number) {
    const numWeeks = Math.ceil(numberOfDays / 7);
    return new Array(numWeeks).fill([]).map((_, index) => {
      return days.slice(index * 7, (index + 1) * 7).map((day) => {
        return day.index;
      });
    });
  }

  addEvent(day: any) {
    this.newEventDay = day;
    this.newEvent = true;
  }

  saveEvent() {
    if (this.eName === "" || this.eTime === null) {
      return;
    }
    let hour = this.eTime.split(":")[0];
    let min = this.eTime.split(":")[1];
    let amPm;
    if (hour > 12) {
      hour = hour - 12;
      amPm = "PM";
    } else {
      amPm = "AM";
    }

    this.newEventDay.events.push({
      name: this.eName,
      time: hour + ":" + min + " " + amPm,
    });
    this.newEvent = false;
    this.newEventDay = null;
  }
}
