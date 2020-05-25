import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GordianComponent } from './gordian.component';

describe('GordianComponent', () => {
  let component: GordianComponent;
  let fixture: ComponentFixture<GordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
