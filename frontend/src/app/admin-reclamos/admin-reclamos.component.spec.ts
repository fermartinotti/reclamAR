import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReclamosComponent } from './admin-reclamos.component';

describe('AdminReclamosComponent', () => {
  let component: AdminReclamosComponent;
  let fixture: ComponentFixture<AdminReclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
