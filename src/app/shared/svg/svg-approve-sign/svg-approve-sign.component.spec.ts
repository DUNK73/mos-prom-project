import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgApproveSignComponent } from './svg-approve-sign.component';

describe('SvgApproveSignComponent', () => {
  let component: SvgApproveSignComponent;
  let fixture: ComponentFixture<SvgApproveSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgApproveSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgApproveSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
