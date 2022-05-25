import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { DateTime } from "luxon";

@Injectable({
  providedIn: "root",
})
export class TimeService {
  private _currentDate: Subject<DateTime> = new BehaviorSubject<DateTime>(
    DateTime.local()
  );
  public readonly currentDate: Observable<DateTime> =
    this._currentDate.asObservable();

  constructor() {}

  // updates the observable date
  updateDateTime(date: DateTime) {
    this._currentDate.next(date);
  }

  // convert time to short string
  // e.g. "9:00 AM"
  getTimeString(date: DateTime) {
    return date.toLocaleString(DateTime.TIME_SIMPLE);
  }
}
