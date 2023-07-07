import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedCompaniesComponent } from './joined-companies.component';

describe('JoinedCompaniesComponent', () => {
  let component: JoinedCompaniesComponent;
  let fixture: ComponentFixture<JoinedCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinedCompaniesComponent]
    });
    fixture = TestBed.createComponent(JoinedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
