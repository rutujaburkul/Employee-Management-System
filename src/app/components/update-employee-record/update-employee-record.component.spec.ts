import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeRecordComponent } from './update-employee-record.component';

describe('UpdateEmployeeRecordComponent', () => {
  let component: UpdateEmployeeRecordComponent;
  let fixture: ComponentFixture<UpdateEmployeeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
