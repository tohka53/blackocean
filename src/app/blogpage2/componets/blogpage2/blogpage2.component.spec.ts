import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogpage2Component } from './blogpage2.component';

describe('Blogpage2Component', () => {
  let component: Blogpage2Component;
  let fixture: ComponentFixture<Blogpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blogpage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blogpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
