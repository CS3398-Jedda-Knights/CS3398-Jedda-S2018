import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlashcardComponent } from './add-flashcard.component';

describe('AddFlashcardComponent', () => {
  let component: AddFlashcardComponent;
  let fixture: ComponentFixture<AddFlashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
