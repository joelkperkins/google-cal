import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { DateTime } from "luxon";

@Injectable({
  providedIn: "root",
})
export class ScheduleService {
  private _activeDate: Subject<DateTime> = new BehaviorSubject<DateTime>(
    DateTime.local()
  );
  public readonly activeDate: Observable<DateTime> =
    this._activeDate.asObservable();

  constructor() {}

  // updates the observable date
  updateActiveDate(date: DateTime) {
    this._activeDate.next(date);
  }

  // save event to local storage
  saveEvent(event: any) {
    const savedEvents = JSON.parse(localStorage.getItem("events"));
    if (savedEvents === null) {
      localStorage.setItem("events", JSON.stringify([event]));
    } else {
      savedEvents.push(event);
      localStorage.setItem("events", JSON.stringify(savedEvents));
    }
  }

  // retrieve saved events from local storage
  getSavedEvents() {
    const savedEvents = JSON.parse(localStorage.getItem("events"));
    if (savedEvents === null) {
      return [];
    } else {
      return savedEvents;
    }
  }

  // delete event from local storage
  deleteEvent(event: any) {
    const savedEvents = JSON.parse(localStorage.getItem("events"));
    if (savedEvents === null) {
      return;
    } else {
      const index = savedEvents.indexOf(event);
      savedEvents.splice(index, 1);
      localStorage.setItem("events", JSON.stringify(savedEvents));
    }
  }
}
