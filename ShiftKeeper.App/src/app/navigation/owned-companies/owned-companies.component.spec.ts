import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedCompaniesComponent } from './owned-companies.component';

describe('OwnedCompaniesComponent', () => {
  let component: OwnedCompaniesComponent;
  let fixture: ComponentFixture<OwnedCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnedCompaniesComponent]
    });
    fixture = TestBed.createComponent(OwnedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
