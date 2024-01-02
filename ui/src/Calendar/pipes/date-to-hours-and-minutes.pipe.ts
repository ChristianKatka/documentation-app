import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'dateToHoursAndMinutes',
})
export class DateToHoursAndMinutesPipe implements PipeTransform {
  transform(value: Date, ...args: any[]): any {
    const time = `${value.getHours()}:${this.addZeroInfrontOfMinutesIfLessThan10(
      value.getMinutes()
    )}`;
    return time;
  }

  addZeroInfrontOfMinutesIfLessThan10(minutes: number): string | number {
    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  }
}
