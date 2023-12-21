import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  selector: 'app-profile-image-with-text-2',
  templateUrl: 'profile-image-with-text-2.component.html',
  styleUrl: 'profile-image-with-text-2.component.scss',
})
export class ProfileImageWithText2Component {}
