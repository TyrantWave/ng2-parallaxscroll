import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxScrollDirective } from './ng2-parallax-scroll.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParallaxScrollDirective],
  exports: [ParallaxScrollDirective]
})
export class ParallaxScrollModule { }
