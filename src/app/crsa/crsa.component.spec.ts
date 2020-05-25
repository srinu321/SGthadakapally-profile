import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRSAComponent } from './crsa.component';

describe('CRSAComponent', () => {
  let component: CRSAComponent;
  let fixture: ComponentFixture<CRSAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRSAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
