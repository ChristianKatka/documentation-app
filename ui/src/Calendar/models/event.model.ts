export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  IsAllDay: boolean;
  startDateTopPixelValue: number;
  endDateHeightPixelValue: number;
}
