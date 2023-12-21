import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ProfileImageWithText1Component } from '../profile-image-with-text-1/profile-image-with-text-1.component';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule, ProfileImageWithText1Component],
  selector: 'app-side-navbar',
  templateUrl: 'side-navbar.component.html',
  styleUrl: 'side-navbar.component.scss',
})
export class SideNavbarComponent {
  @Input()
  theAmountOfSpaceSideNavTakes = '';
}
