import { Component, ViewEncapsulation } from '@angular/core';
import { AppConstants } from '../AppConstants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  aSidebar: boolean = false;
  email = AppConstants.email
  images = [1, 2, 3, 4, 5].map((n) => `assets/img-0${n}.jpeg`);

  click(value: boolean) {
    this.aSidebar = value;

  }


}
