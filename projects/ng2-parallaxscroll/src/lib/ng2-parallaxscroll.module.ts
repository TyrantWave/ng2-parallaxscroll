import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxScrollComponent } from './ng2-parallaxscroll.component';
import { ParallaxScrollDirective } from './ng2-parallaxscroll.directive';

@NgModule({
  declarations: [
    ParallaxScrollComponent,
    ParallaxScrollDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ParallaxScrollComponent,
    ParallaxScrollDirective
  ]
})
export class ParallaxScrollModule { }
