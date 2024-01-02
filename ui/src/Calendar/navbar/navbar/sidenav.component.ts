import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  standalone: true,
  imports: [MaterialModule],
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor() {}
}
