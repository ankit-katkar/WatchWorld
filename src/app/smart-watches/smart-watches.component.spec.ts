import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWatchesComponent } from './smart-watches.component';

describe('SmartWatchesComponent', () => {
  let component: SmartWatchesComponent;
  let fixture: ComponentFixture<SmartWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartWatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
