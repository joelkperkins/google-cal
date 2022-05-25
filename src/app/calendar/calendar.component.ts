import { Component, OnInit } from "@angular/core";
import { TimeService } from "../time.service";
import { ScheduleService } from "../schedule-service.service";
import { DateTime } from "luxon";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
})
export class CalendarComponent implements OnInit {
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
  activeDay: DateTime = null;
  savedEvents: any[] = [];

  constructor(
    private timeService: TimeService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit() {
    this.savedEvents = this.scheduleService.getSavedEvents();
    this.scheduleService.updateActiveDate(DateTime.local());
    this.scheduleService.activeDate.subscribe((date) => {
      this.activeDay = date;
    });
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
          name: currentDay.weekdayShort,
          num: currentDay.day,
          index: index,
          events: this.checkEvents(currentDay),
        };

        return day;
      });
  }

  checkEvents(date: DateTime) {
    return this.savedEvents.filter((event) => {
      event.date = DateTime.fromISO(event.date);
      return (
        event.date.day === date.day &&
        event.date.month === date.month &&
        event.date.year === date.year
      );
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

  setActiveDay(day: any) {
    this.scheduleService.updateActiveDate(day.date);
  }

  newEvent(e) {
    this.calendar.content[e.date.index].events.push(e.event);
    this.calendar.content[e.date.index].events.sort((a, b) => {
      return a.date.diff(b.date);
    });
    this.scheduleService.saveEvent(e.event);
  }

  deleteEvent(e) {
    console.log(e);
    this.calendar.content[e.date.index].events = this.calendar.content[
      e.date.index
    ].events.filter((event) => {
      return event.name !== e.event.name;
    });
    this.scheduleService.deleteEvent(e.event);
  }
}
