import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ScheduleService } from "../../schedule-service.service";
import { TimeService } from "../../time.service";
import { DateTime } from "luxon";

@Component({
  selector: "app-schedule-date",
  templateUrl: "./schedule-date.component.html",
  styleUrls: ["./schedule-date.component.css"],
})
export class ScheduleDateComponent implements OnInit {
  @Input() calendar: any;
  @Output() emitNewEvent: EventEmitter<any> = new EventEmitter();
  @Output() emitDeleteEvent: EventEmitter<any> = new EventEmitter();
  activeDate: any = { events: [] };
  prevDay: DateTime = null;
  nextDay: DateTime = null;

  newEvent: boolean = false;
  eventName: string = "";
  eventTime: any = null;

  constructor(
    private scheduleService: ScheduleService,
    private timeService: TimeService
  ) {}

  ngOnInit() {
    // subscribe the active date and set the next and prev day
    this.scheduleService.activeDate.subscribe((date) => {
      this.activeDate = this.calendar.content.find((day) => {
        return day.date.toISODate() === date.toISODate();
      });
      this.prevDay = date.minus({ days: 1 });
      this.nextDay = date.plus({ days: 1 });
    });
  }

  // update the active date in the schedule and adjust month/year if needed
  updateDate(date: DateTime) {
    if (
      this.calendar.date.month !== date.month ||
      this.calendar.date.year !== date.year
    ) {
      this.timeService.updateDateTime(
        this.calendar.date.set({ month: date.month, year: date.year })
      );
    }
    this.scheduleService.updateActiveDate(date);
  }

  // show the new event form
  startNewEvent() {
    this.newEvent = true;
  }

  // remove the new event form
  cancelEvent() {
    this.newEvent = false;
    this.eventName = "";
    this.eventTime = null;
  }

  // convert the time and emit the new event to the cal component
  saveEvent() {
    if (this.eventName === "" || this.eventTime === null) {
      return;
    }
    let hour = this.eventTime.split(":")[0];
    let min = this.eventTime.split(":")[1];
    const eventDate = this.activeDate.date.set({
      hour: parseInt(hour),
      minute: parseInt(min),
    });

    const event = {
      name: this.eventName,
      date: eventDate,
    };

    this.emitNewEvent.emit({ date: this.activeDate, event: event });
    this.cancelEvent();
  }

  // convert the time to a string
  // 9:00 AM
  getTimeString(date: DateTime) {
    return this.timeService.getTimeString(date);
  }

  // emit the delete event to the cal component
  deleteEvent(event: any) {
    this.emitDeleteEvent.emit({ date: this.activeDate, event: event });
  }
}
