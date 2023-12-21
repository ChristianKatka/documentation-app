import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable()
export class SnackbarService {
  snackbarDurationInSeconds = 4;

  constructor(private snackBar: MatSnackBar) {}

  openSnackbar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }
}
