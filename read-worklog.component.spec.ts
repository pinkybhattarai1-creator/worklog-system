import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadWorklogComponent } from './read-worklog.component';

describe('ReadWorklogComponent', () => {
  let component: ReadWorklogComponent;
  let fixture: ComponentFixture<ReadWorklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadWorklogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadWorklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
