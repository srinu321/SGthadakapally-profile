import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }


  ngOnInit(): void {
  }
  
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }


}
