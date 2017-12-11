import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponentComponent } from './pizza-component.component';

describe('PizzaComponentComponent', () => {
  let component: PizzaComponentComponent;
  let fixture: ComponentFixture<PizzaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
