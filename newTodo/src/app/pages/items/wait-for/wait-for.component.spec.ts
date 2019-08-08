import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitForComponent } from './wait-for.component';

describe('WaitForComponent', () => {
  let component: WaitForComponent;
  let fixture: ComponentFixture<WaitForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
