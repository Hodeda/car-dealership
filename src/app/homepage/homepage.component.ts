import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  scrollToFindCar() {
    const findCarSection = document.getElementById('app-find-car');

    if (findCarSection) {
      findCarSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
