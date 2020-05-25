import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationwideComponent } from './nationwide.component';

describe('NationwideComponent', () => {
  let component: NationwideComponent;
  let fixture: ComponentFixture<NationwideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationwideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationwideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
