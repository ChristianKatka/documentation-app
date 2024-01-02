import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { CalendarEvent } from '../models/event.model';
import { DayViewComponent } from './day-view.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule, DayViewComponent],
  selector: 'app-day-view-container',
  templateUrl: 'day-view.container.html',
})
export class DayViewContainerComponent implements OnInit {
  event$ = new BehaviorSubject<CalendarEvent>({} as CalendarEvent);
  timeNowLineTopPixelsValue$ = new BehaviorSubject<number>(0);

  constructor() {}

  ngOnInit(): void {
    const event: CalendarEvent = {
      id: '1234',
      title: 'Hammaslääkäri',
      description: 'muista pestä hampaat',
      IsAllDay: false,
      startDate: this.createDate(6, 10),
      endDate: this.createDate(7, 1),
      startDateTopPixelValue: this.calculateTopPixelsFromDate(
        this.createDate(6, 10)
      ),
      endDateHeightPixelValue: this.calculateEventHeight(
        this.createDate(6, 10),
        this.createDate(7, 1)
      ),
    };

    this.event$.next(event);
    this.timeNowLineTopPixelsValue$.next(
      this.calculateTopPixelsFromDate(new Date())
    );
  }

  createDate(hour: number, minutes: number): Date {
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minutes);

    return date;
  }

  calculateTopPixelsFromDate(date: Date): number {
    const totalMinutes = date.getHours() * 60 + date.getMinutes();

    const topPixels = totalMinutes * 0.8; // Each minute is 0.8 pixels

    return topPixels;
  }

  calculateEventHeight(start: Date, end: Date): number {
    const startMinutes = start.getHours() * 60 + start.getMinutes();
    const endMinutes = end.getHours() * 60 + end.getMinutes();
    const eventDuration = endMinutes - startMinutes;
    const eventHeight = eventDuration * 0.8; // Each minute is 0.8 pixels

    return eventHeight;
  }
}
