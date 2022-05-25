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
  // Properties for the calendar
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

  // Properties for the schedule
  activeDay: DateTime = null;

  // hold saved events from local storage
  savedEvents: any[] = [];

  constructor(
    private timeService: TimeService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit() {
    // get saved events from local storage
    this.savedEvents = this.scheduleService.getSavedEvents();

    // set the schedule active day to today
    this.scheduleService.updateActiveDate(DateTime.local());

    // subscribe to the schedule active day
    this.scheduleService.activeDate.subscribe((date) => {
      this.activeDay = date;
    });

    // subscribe to the calendar date
    this.timeService.currentDate.subscribe((date) => {
      this.calendar.date = date;
      // init the calendar based on the current date
      this.initCalendar(this.calendar.scale);
    });
  }

  // init calendar based on the current date
  // TODO: add a way to change the scale
  initCalendar(scale: string = "month") {
    if (scale === "month") {
      // build the month days
      this.calendar.content = this.buildMonthDays();
      // build the weeks
      this.calendar.scaleSet = this.buildWeeks(
        this.calendar.content,
        this.calendar.date.daysInMonth
      );
    }
  }

  // build the days for the current month
  buildMonthDays() {
    const firstDay = this.calendar.date.startOf("month");
    let numDays = this.calendar.date.daysInMonth;
    let initialOffSet = 0;
    let offSetTracker = 0;
    // if the first day is not sunday, add days to the beginning of the month
    if (firstDay.weekday !== 7) {
      initialOffSet = firstDay.weekday;
      offSetTracker = firstDay.weekday;
      numDays += firstDay.weekday;
    }
    return new Array(numDays).fill({}).map((day, index) => {
      let currentDay;
      let offSet = false;
      // handle moving the days over so weeks dont start on random days
      if (offSetTracker > 0) {
        currentDay = this.calendar.date
          .startOf("month")
          .minus({ days: offSetTracker });
        offSetTracker -= 1;
        // set flag so cal knows this day is offset
        offSet = true;
      } else {
        currentDay = this.calendar.date
          .startOf("month")
          .plus({ days: index - initialOffSet });
      }
      day = {
        offSet: offSet,
        date: currentDay,
        name: currentDay.weekdayShort,
        num: currentDay.day,
        index: index,
        events: this.checkEvents(currentDay),
      };
      // reset offset flag
      offSet = false;
      return day;
    });
  }

  // checks if a day has events saved in local storage
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

  // build the weeks for the current month and adds reference to the days
  buildWeeks(days: any[], numberOfDays: number) {
    const numWeeks = Math.ceil(numberOfDays / 7);
    return new Array(numWeeks).fill([]).map((_, index) => {
      return days.slice(index * 7, (index + 1) * 7).map((day) => {
        return day.index;
      });
    });
  }

  // click on day to set active in the schedule
  setActiveDay(day: any) {
    this.scheduleService.updateActiveDate(day.date);
  }

  // adds an event to the calendar
  newEvent(e) {
    this.calendar.content[e.date.index].events.push(e.event);
    this.calendar.content[e.date.index].events.sort((a, b) => {
      return a.date.diff(b.date);
    });
    this.scheduleService.saveEvent(e.event);
  }

  // removes an event from the calendar
  deleteEvent(e) {
    this.calendar.content[e.date.index].events = this.calendar.content[
      e.date.index
    ].events.filter((event) => {
      return event.name !== e.event.name;
    });
    this.scheduleService.deleteEvent(e.event);
  }

  // set cal date to today
  today() {
    const today = DateTime.local();
    this.timeService.updateDateTime(today);
    this.scheduleService.updateActiveDate(today);
  }
}
