import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  images = [1, 2, 3, 4, 5].map((n) => `assets/img-0${n}.jpeg`);


}
