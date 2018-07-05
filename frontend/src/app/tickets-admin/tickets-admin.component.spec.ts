import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsAdminComponent } from './tickets-admin.component';

describe('TicketsAdminComponent', () => {
  let component: TicketsAdminComponent;
  let fixture: ComponentFixture<TicketsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
