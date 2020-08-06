import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDocumentsComponent } from './svg-documents.component';

describe('SvgDocumentsComponent', () => {
  let component: SvgDocumentsComponent;
  let fixture: ComponentFixture<SvgDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
