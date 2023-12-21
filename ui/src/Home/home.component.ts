import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SnackbarService } from './snackbar/snackbar.service';
import { components } from '.';

@Component({
  standalone: true,
  imports: [CommonModule, ...components],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [SnackbarService],
})
export class HomeComponent {
  theAmountOfSpaceSideNavTakes = '250px';
}
