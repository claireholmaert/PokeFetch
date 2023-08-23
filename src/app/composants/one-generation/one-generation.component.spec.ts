import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneGenerationComponent } from './one-generation.component';

describe('OneGenerationComponent', () => {
  let component: OneGenerationComponent;
  let fixture: ComponentFixture<OneGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneGenerationComponent]
    });
    fixture = TestBed.createComponent(OneGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
