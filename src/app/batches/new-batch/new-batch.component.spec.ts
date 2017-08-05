import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBatchComponent } from './new-batch.component';

describe('NewBatchComponent', () => {
  let component: NewBatchComponent;
  let fixture: ComponentFixture<NewBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
