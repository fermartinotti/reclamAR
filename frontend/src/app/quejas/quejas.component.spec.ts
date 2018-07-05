import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasComponent } from './quejas.component';

describe('QuejasComponent', () => {
  let component: QuejasComponent;
  let fixture: ComponentFixture<QuejasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
