import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { MaterialModule } from '../../material.module';

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  selector: 'app-open-snack-bar',
  templateUrl: './open-snackbar-button.component.html',
  providers: [SnackbarService],
})
export class OpenSnackbarButtonComponent {
  constructor(private snackbarService: SnackbarService) {}

  openSnackBar() {
    this.snackbarService.openSnackbar();
  }
}
