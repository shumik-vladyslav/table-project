import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanPositionHistoryComponent } from './human-position-history.component';

describe('HumanPositionHistoryComponent', () => {
  let component: HumanPositionHistoryComponent;
  let fixture: ComponentFixture<HumanPositionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HumanPositionHistoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanPositionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
