import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReclamoComponent } from './crear-reclamo.component';

describe('CrearReclamoComponent', () => {
  let component: CrearReclamoComponent;
  let fixture: ComponentFixture<CrearReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
