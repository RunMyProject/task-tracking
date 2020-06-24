import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskColorComponent } from './task-color.component';

describe('TaskColorComponent', () => {
  let component: TaskColorComponent;
  let fixture: ComponentFixture<TaskColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
