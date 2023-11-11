import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formData = new BehaviorSubject<any[]>(this.getFormDataFromLocalStorage());

  public carFormsSubmitted: number;

  constructor() { }


  
  addToLocalStorage(data: any) {
    this.carFormsSubmitted = this.countCarFormDataKeys(); 
    localStorage.setItem(`carFormData${this.carFormsSubmitted+1}`, JSON.stringify(data));
    const updatedFormData = this.getFormDataFromLocalStorage();
    this.formData.next(updatedFormData);
  }

  getFormDataFromLocalStorage(): any[] {
    let allFormData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('carFormData')) {
        const data = localStorage.getItem(key);
        if (data) {
          allFormData.push(JSON.parse(data));
        }
      }
    }
    return allFormData;
  }

  getCurrentData() {
    return this.formData.asObservable();
  }

  countCarFormDataKeys(): number {
    return Object.keys(localStorage)
                 .filter(key => key.startsWith('carFormData'))
                 .length;

  }
}
