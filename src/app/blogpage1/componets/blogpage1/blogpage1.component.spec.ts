import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogpage1Component } from './blogpage1.component';

describe('Blogpage1Component', () => {
  let component: Blogpage1Component;
  let fixture: ComponentFixture<Blogpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blogpage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blogpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
