import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {
    this.calDays = new Array(this.numDays).fill({}).map((day, index) => {
      let currDay;

      if (this.currDay === 7) {
        this.currDay = 0;
        currDay = this.currDay;
      } else {
        currDay = this.currDay;
      }
      this.currDay++;

      day = {
        name: this.days[currDay],
        num: index + 1,
        events: [],
      };

      return day;
    });

    const numWeeks = Math.ceil(this.numDays / 7);

    for (let i = 0; i < numWeeks; i++) {
      this.weeks.push([]);
      this.weeks[i] = this.calDays.slice(i * 7, (i + 1) * 7);
    }
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
