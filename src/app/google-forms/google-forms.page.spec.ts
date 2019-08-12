import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFormsPage } from './google-forms.page';

describe('GoogleFormsPage', () => {
  let component: GoogleFormsPage;
  let fixture: ComponentFixture<GoogleFormsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleFormsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
