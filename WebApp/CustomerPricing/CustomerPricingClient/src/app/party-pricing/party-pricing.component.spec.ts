import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyPricingComponent} from './party-pricing.component';

describe('PartyPricingComponent', () => {
  let component: PartyPricingComponent;
  let fixture: ComponentFixture<PartyPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartyPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
