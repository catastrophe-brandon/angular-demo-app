import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListHomeComponent } from './wish-list-home.component';

describe('WishListHomeComponent', () => {
  let component: WishListHomeComponent;
  let fixture: ComponentFixture<WishListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
