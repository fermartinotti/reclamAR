import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacheoComponent } from './bacheo.component';

describe('BacheoComponent', () => {
  let component: BacheoComponent;
  let fixture: ComponentFixture<BacheoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacheoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacheoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
