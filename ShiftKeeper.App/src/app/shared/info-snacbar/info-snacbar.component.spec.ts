import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSnacbarComponent } from './info-snacbar.component';

describe('InfoSnacbarComponent', () => {
  let component: InfoSnacbarComponent;
  let fixture: ComponentFixture<InfoSnacbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSnacbarComponent]
    });
    fixture = TestBed.createComponent(InfoSnacbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
