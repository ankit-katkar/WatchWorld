import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryWatchesComponent } from './luxury-watches.component';

describe('LuxuryWatchesComponent', () => {
  let component: LuxuryWatchesComponent;
  let fixture: ComponentFixture<LuxuryWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuryWatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
