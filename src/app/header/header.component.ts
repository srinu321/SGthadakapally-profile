import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../AppConstants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email = AppConstants.email
  faceBook = AppConstants.faceBook
  gitHub = AppConstants.gitHub;
  instagram = AppConstants.instagram;
  linkden = AppConstants.linkden;

  resume(): Window {

    return window.open('assets/Srinivas-G.pdf', '_blank');
  
  }


}
