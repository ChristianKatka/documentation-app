import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  standalone: true,
  imports: [MaterialModule],
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent {
  @Output() sidenavToggle = new EventEmitter<void>();
}
