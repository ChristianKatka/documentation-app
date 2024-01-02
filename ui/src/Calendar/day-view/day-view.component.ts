import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CalendarEvent } from '../models/event.model';
import { DateToHoursAndMinutesPipe } from '../pipes/date-to-hours-and-minutes.pipe';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule, DateToHoursAndMinutesPipe],
  selector: 'app-day-view',
  templateUrl: 'day-view.component.html',
  styleUrls: ['day-view.component.scss'],
})
export class DayViewComponent implements OnChanges {
  @Input() event: CalendarEvent = {} as CalendarEvent;
  @Input() timeNowLineTopPixelsValue: any;

  hours: string[] = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(this.event));

    // console.log(this.event);
  }
}
