import { Component, OnInit, SecurityContext  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColorPickerService } from 'ngx-color-picker';
import { FormService } from '../../services/car-form.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-find-car-form',
  templateUrl: './find-car-form.component.html',
  styleUrls: ['./find-car-form.component.css']
})
export class FindCarFormComponent implements OnInit {
  public carForm: FormGroup;

  public colorPickerToggle: boolean = false;
  public hobbiesList: string[] = ['Reading', 'Gaming', 'Traveling', 'Cooking', 'Sports'];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private cpService: ColorPickerService, private carService: FormService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.resetForm()
  }
  
  resetForm() {
    this.carForm = this.fb.group({
      fullName: ['', [Validators.required, this.noNumbersValidator()]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required, this.notFutureDateValidator(), this.ageValidator()]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required, this.noNumbersValidator()]],
      country: ['', [Validators.required, this.noNumbersValidator()]],
      hobbies: [[], [Validators.required]],
      favoriteColor: ['', [Validators.required]],
      requiredSeats: ['', [Validators.required, Validators.min(2), Validators.max(7)]],
      motorType: ['', [Validators.required]]
    });

    
    
  }
  
  submitForm() {
    if (this.carForm.valid) {
      const sanitizedData = this.sanitizeInput(this.carForm.value);
      this.carService.addToLocalStorage(this.carForm.value);
      this.resetForm()
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

  changeColor(color: string) {
    this.carForm.controls['favoriteColor'].setValue(color);
    this.colorPickerToggle = false;
  }

   noNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = /\d/.test(control.value);
      return forbidden ? { 'containsNumber': { value: control.value } } : null;
    };
  }
  
   notFutureDateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const inputDate = new Date(control.value);
      const currentDate = new Date();
      return inputDate > currentDate ? { 'futureDate': { value: control.value } } : null;
    };
  }

  ageValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const today = new Date();
      const birthDate = new Date(control.value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 18) {
        return { 'notMinimumAge': true };
      }
      return null;
    };
  }

  sanitizeInput(input: any): any {
    if (typeof input === 'string') {
      return this.sanitizer.sanitize(SecurityContext.HTML, input);
    } else if (Array.isArray(input)) {
      return input.map(item => this.sanitizeInput(item));
    } else if (typeof input === 'object' && input !== null) {
      const sanitizedObj = {};
      for (const key in input) {
        sanitizedObj[key] = this.sanitizeInput(input[key]);
      }
      return sanitizedObj;
    } else {
      return input;
    }
  }
}
