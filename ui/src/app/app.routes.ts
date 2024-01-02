import { Routes } from '@angular/router';
import { HomeComponent } from '../Home/home.component';
import { CalendarFeatureContainerComponent } from '../Calendar/calendar-feature.container';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarFeatureContainerComponent },
];
