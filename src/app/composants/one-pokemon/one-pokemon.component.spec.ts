import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePokemonComponent } from './one-pokemon.component';

describe('OnePokemonComponent', () => {
  let component: OnePokemonComponent;
  let fixture: ComponentFixture<OnePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnePokemonComponent]
    });
    fixture = TestBed.createComponent(OnePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
