import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogpage3Component } from './blogpage3.component';

describe('Blogpage3Component', () => {
  let component: Blogpage3Component;
  let fixture: ComponentFixture<Blogpage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blogpage3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blogpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
