import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignSubjectComponent } from './unassign-subject.component';

describe('UnassignSubjectComponent', () => {
  let component: UnassignSubjectComponent;
  let fixture: ComponentFixture<UnassignSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnassignSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnassignSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
