import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../AppConstants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  university = AppConstants.university;
  office = AppConstants.office
}
