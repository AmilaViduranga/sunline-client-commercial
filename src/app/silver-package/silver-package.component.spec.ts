import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverPackageComponent } from './silver-package.component';

describe('SilverPackageComponent', () => {
  let component: SilverPackageComponent;
  let fixture: ComponentFixture<SilverPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilverPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
