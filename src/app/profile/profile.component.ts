import { Component, ViewEncapsulation } from '@angular/core';
import { AppConstants } from '../AppConstants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  email = AppConstants.email
 



}
