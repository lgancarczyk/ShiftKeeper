import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameLinkComponent } from './user-name-link.component';

describe('UserNameLinkComponent', () => {
  let component: UserNameLinkComponent;
  let fixture: ComponentFixture<UserNameLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNameLinkComponent]
    });
    fixture = TestBed.createComponent(UserNameLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
