import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art5Component } from './art5.component';

describe('Art5Component', () => {
  let component: Art5Component;
  let fixture: ComponentFixture<Art5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Art5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Art5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
