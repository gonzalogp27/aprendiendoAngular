import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumetosComponent } from './documetos.component';

describe('DocumetosComponent', () => {
  let component: DocumetosComponent;
  let fixture: ComponentFixture<DocumetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
