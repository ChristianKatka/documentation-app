import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SnackbarService } from './snackbar/snackbar.service';
import { components } from '.';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule, ...components],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [SnackbarService],
})
export class HomeComponent {
  theAmountOfSpaceSideNavTakes = '250px';
}
