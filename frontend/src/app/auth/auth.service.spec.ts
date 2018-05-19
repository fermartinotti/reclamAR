import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthComponent', () => {
  let component: AuthService;
  let fixture: ComponentFixture<AuthService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
