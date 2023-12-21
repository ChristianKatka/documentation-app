import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  selector: 'app-b-card',
  templateUrl: 'b-card.component.html',
  styleUrl: 'b-card.component.scss',
})
export class BCardComponent {}
