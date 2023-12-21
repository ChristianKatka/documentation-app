import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  selector: 'app-info-box',
  templateUrl: 'info-box.component.html',
  styleUrl: 'info-box.component.scss',
})
export class InfoBoxComponent {
  @Input()
  text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut fuga! Accusantium.';
}
