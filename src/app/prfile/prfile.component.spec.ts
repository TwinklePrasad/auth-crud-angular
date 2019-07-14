import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfileComponent } from './prfile.component';

describe('PrfileComponent', () => {
  let component: PrfileComponent;
  let fixture: ComponentFixture<PrfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
