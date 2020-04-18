import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForstaffComponent } from './forstaff.component';

describe('ForstaffComponent', () => {
  let component: ForstaffComponent;
  let fixture: ComponentFixture<ForstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
