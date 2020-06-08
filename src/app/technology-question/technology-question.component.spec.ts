import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyQuestionComponent } from './technology-question.component';

describe('TechnologyQuestionComponent', () => {
  let component: TechnologyQuestionComponent;
  let fixture: ComponentFixture<TechnologyQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
