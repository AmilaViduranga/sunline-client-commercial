import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationFounderComponent } from './foundation-founder.component';

describe('FoundationFounderComponent', () => {
  let component: FoundationFounderComponent;
  let fixture: ComponentFixture<FoundationFounderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationFounderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationFounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
