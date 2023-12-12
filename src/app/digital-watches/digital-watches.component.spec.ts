import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalWatchesComponent } from './digital-watches.component';

describe('DigitalWatchesComponent', () => {
  let component: DigitalWatchesComponent;
  let fixture: ComponentFixture<DigitalWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalWatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
