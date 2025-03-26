import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesELKComponent } from './enlaces-elk.component';

describe('EnlacesELKComponent', () => {
  let component: EnlacesELKComponent;
  let fixture: ComponentFixture<EnlacesELKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlacesELKComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesELKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
