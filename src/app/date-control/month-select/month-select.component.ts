import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { DateTime } from "luxon";
import { TimeService } from "../../time.service";

@Component({
  selector: "app-month-select",
  templateUrl: "./month-select.component.html",
  styleUrls: ["./month-select.component.css"],
})
export class MonthSelectComponent implements OnInit {
  date: DateTime = null;
  nextMonth: DateTime = null;
  prevMonth: DateTime = null;
  prevYear: DateTime = null;
  nextYear: DateTime = null;

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.timeService.currentDate.subscribe((date) => {
      this.date = date;
      this.prevMonth = date.minus({ months: 1 });
      this.nextMonth = date.plus({ months: 1 });
      this.prevYear = date.minus({ years: 1 });
      this.nextYear = date.plus({ years: 1 });
    });
  }

  updateMonth(month: number) {
    if (this.date.month === 1 && month === 12) {
      this.timeService.updateDateTime(
        this.date.set({ month: month, year: this.date.year - 1 })
      );
    } else if (this.date.month === 12 && month === 1) {
      this.timeService.updateDateTime(
        this.date.set({ month: month, year: this.date.year + 1 })
      );
    } else {
      this.timeService.updateDateTime(this.date.set({ month: month }));
    }
  }

  updateYear(year: number) {
    this.timeService.updateDateTime(this.date.set({ year: year }));
  }
}
