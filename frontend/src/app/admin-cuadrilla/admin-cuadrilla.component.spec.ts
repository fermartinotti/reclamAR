import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCuadrillaComponent } from './admin-cuadrilla.component';

describe('AdminCuadrillaComponent', () => {
  let component: AdminCuadrillaComponent;
  let fixture: ComponentFixture<AdminCuadrillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCuadrillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCuadrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
