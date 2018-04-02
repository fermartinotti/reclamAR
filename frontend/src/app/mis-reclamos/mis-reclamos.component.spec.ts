import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisReclamosComponent } from './mis-reclamos.component';

describe('MisReclamosComponent', () => {
  let component: MisReclamosComponent;
  let fixture: ComponentFixture<MisReclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisReclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
