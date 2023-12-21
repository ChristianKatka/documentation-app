import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  selector: 'app-icon-button-with-text',
  templateUrl: 'icon-button-with-text.component.html',
  styleUrl: 'icon-button-with-text.component.scss',
})
export class IconButtonWithTextComponent {}
