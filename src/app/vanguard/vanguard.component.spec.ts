import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanguardComponent } from './vanguard.component';

describe('VanguardComponent', () => {
  let component: VanguardComponent;
  let fixture: ComponentFixture<VanguardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanguardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
