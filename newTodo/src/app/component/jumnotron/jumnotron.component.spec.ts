import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumnotronComponent } from './jumnotron.component';

describe('JumnotronComponent', () => {
  let component: JumnotronComponent;
  let fixture: ComponentFixture<JumnotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumnotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumnotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
