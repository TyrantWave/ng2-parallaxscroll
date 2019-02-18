import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxScrollComponent } from './ng2-parallaxscroll.component';

describe('ParallaxScrollComponent', () => {
  let component: ParallaxScrollComponent;
  let fixture: ComponentFixture<ParallaxScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxScrollComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
