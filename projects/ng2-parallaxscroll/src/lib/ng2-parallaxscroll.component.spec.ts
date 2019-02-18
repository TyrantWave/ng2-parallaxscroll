import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxscrollComponent } from './ng2-parallaxscroll.component';

describe('ParallaxscrollComponent', () => {
  let component: ParallaxscrollComponent;
  let fixture: ComponentFixture<ParallaxscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxscrollComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
