import { TestBed } from "@angular/core/testing";

import { ScheduleService } from "./schedule-service.service";

describe("ScheduleServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ScheduleService = TestBed.get(ScheduleService);
    expect(service).toBeTruthy();
  });
});
