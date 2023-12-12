import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausalWatchesComponent } from './causal-watches.component';

describe('CausalWatchesComponent', () => {
  let component: CausalWatchesComponent;
  let fixture: ComponentFixture<CausalWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CausalWatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CausalWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
