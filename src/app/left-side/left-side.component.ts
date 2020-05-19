import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller, private profileComponent: ProfileComponent) { }

  public onClick(elementId: string): void {

    this.profileComponent.click(true)
    this.viewportScroller.scrollToAnchor(elementId);


  }

  ngOnInit(): void {
  }

}
