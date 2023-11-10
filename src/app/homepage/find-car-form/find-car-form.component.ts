import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-find-car-form',
  templateUrl: './find-car-form.component.html',
  styleUrls: ['./find-car-form.component.css']
})
export class FindCarFormComponent implements OnInit {
  carForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.carForm = this.fb.group({
      fullName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      hobbies: ['', [Validators.required]],
      favoriteColor: ['', [Validators.required]],
      requiredSeats: ['', [Validators.required, Validators.min(2), Validators.max(7)]],
      motorType: ['', [Validators.required]]
    });

    this.carForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe(data => {
        console.log('Form changes', data);
      });
  }

  submitForm() {
    if (this.carForm.valid) {
      localStorage.setItem('carFormData', JSON.stringify(this.carForm.value));
      this.snackBar.open('Form submitted successfully! We will send an email with your match.', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
    } else {
      this.snackBar.open('Please fill all required fields correctly!', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }
}
