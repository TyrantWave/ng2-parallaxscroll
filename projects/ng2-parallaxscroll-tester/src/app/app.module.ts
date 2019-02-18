import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParallaxScrollModule } from 'projects/ng2-parallaxscroll/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ParallaxScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
