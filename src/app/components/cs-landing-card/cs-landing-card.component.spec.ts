import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsLandingCardComponent } from './cs-landing-card.component';

describe('CsLandingCardComponent', () => {
  let component: CsLandingCardComponent;
  let fixture: ComponentFixture<CsLandingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsLandingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsLandingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
