import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuComponent } from './nav-menu.component';

describe('NavMenuComponent', () => {
  let navMenuComponent: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavMenuComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavMenuComponent);
    navMenuComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize navmenu component', () => {
    expect(navMenuComponent).toBeTruthy();
  });
});
