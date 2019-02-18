import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxscrollComponent } from './ng2-parallaxscroll.component';
import { ParallaxScrollDirective } from './ng2-parallaxscroll.directive';

@NgModule({
  declarations: [
    ParallaxscrollComponent,
    ParallaxScrollDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ParallaxscrollComponent,
    ParallaxScrollDirective
  ]
})
export class ParallaxscrollModule { }
