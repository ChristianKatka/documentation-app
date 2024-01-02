import { Component } from '@angular/core';
import { NavbarContainerComponent } from './navbar/navbar/navbar.container';
import { CreateNewEventButtonComponent } from './create-new-event/create-new-event-button/create-new-event-button.component';
import { SpaceGiverComponent } from '../Shared/space-giver/space-giver.component';
import { DayViewContainerComponent } from './day-view/day-view.container';

@Component({
  standalone: true,
  imports: [
    SpaceGiverComponent,
    NavbarContainerComponent,
    CreateNewEventButtonComponent,
    DayViewContainerComponent,
  ],
  templateUrl: 'calendar-feature.container.html',
})
export class CalendarFeatureContainerComponent {}
