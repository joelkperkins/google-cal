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
    this.scheduleService.activeDate.subscribe((date) => {
      this.activeDate = this.calendar.content[date.day - 1];
      this.prevDay = date.minus({ days: 1 });
      this.nextDay = date.plus({ days: 1 });
    });
  }

  updateDate(date: DateTime) {
    if (
      this.calendar.date.month !== date.month ||
      this.calendar.date.year !== date.year
    ) {
      this.timeService.updateDateTime(
        this.calendar.date.set({ month: date.month })
      );
    }
    this.scheduleService.updateActiveDate(date);
  }

  startNewEvent() {
    this.newEvent = true;
  }

  cancelEvent() {
    this.newEvent = false;
    this.eventName = "";
    this.eventTime = null;
  }

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

  getTimeString(date: DateTime) {
    return this.timeService.getTimeString(date);
  }

  deleteEvent(event: any) {
    this.emitDeleteEvent.emit({ date: this.activeDate, event: event });
  }
}
