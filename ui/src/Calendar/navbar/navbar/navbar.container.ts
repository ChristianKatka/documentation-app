import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { NavbarComponent } from './navbar.component';
import { SidenavComponent } from './sidenav.component';

@Component({
  standalone: true,
  imports: [MaterialModule, NavbarComponent, SidenavComponent],
  selector: 'app-navbar-bar',
  templateUrl: 'navbar.container.html',
  styleUrls: ['navbar.container.scss'],
})
export class NavbarContainerComponent {}
