import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  standalone: true,
  imports: [MaterialModule],
  selector: 'app-create-new-event-button',
  templateUrl: 'create-new-event-button.component.html',
  styleUrls: ['create-new-event-button.component.scss'],
})
export class CreateNewEventButtonComponent {
  createEvent() {}
}
