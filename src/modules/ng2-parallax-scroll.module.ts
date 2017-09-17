import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxScrollDirective } from './ng2-parallax-scroll.directive';
import { ParallaxScrollComponent } from './ng2-parallax-scroll.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  // tslint:disable-next-line:object-literal-sort-keys
  declarations: [
    ParallaxScrollComponent,
    ParallaxScrollDirective
  ],
  exports: [
    ParallaxScrollComponent,
    ParallaxScrollDirective
  ],
})
export class ParallaxScrollModule { }
