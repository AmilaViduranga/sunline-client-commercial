import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatinumPackageComponent } from './platinum-package.component';

describe('PlatinumPackageComponent', () => {
  let component: PlatinumPackageComponent;
  let fixture: ComponentFixture<PlatinumPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatinumPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatinumPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
