import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-find-car-form',
  templateUrl: './find-car-form.component.html',
  styleUrls: ['./find-car-form.component.css']
})
export class FindCarFormComponent {
  constructor(private snackBar: MatSnackBar) {}

  submitForm() {
    this.snackBar.open('Form submitted successfully!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }
}