import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesObservableComponent } from './heroes-observable.component';

describe('HeroesObservableComponent', () => {
  let component: HeroesObservableComponent;
  let fixture: ComponentFixture<HeroesObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
