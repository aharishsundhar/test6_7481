import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldataComponent } from './getalldata.component';

describe('GetalldataComponent', () => {
  let component: GetalldataComponent;
  let fixture: ComponentFixture<GetalldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetalldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});