import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldPackageComponent } from './gold-package.component';

describe('GoldPackageComponent', () => {
  let component: GoldPackageComponent;
  let fixture: ComponentFixture<GoldPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
