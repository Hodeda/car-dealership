import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormData } from '../models/find-car-form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formDataSubject = new BehaviorSubject<FormData>(null);

  saveFormData(formData: FormData) {
    localStorage.setItem('formData', JSON.stringify(formData));
    this.formDataSubject.next(formData);
  }

  getFormData(): Observable<FormData> {
    return this.formDataSubject.asObservable();
  }
}
