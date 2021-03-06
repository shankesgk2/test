/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OperateComponent } from './operate.component';

describe('OperateComponent', () => {
  let component: OperateComponent;
  let fixture: ComponentFixture<OperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
