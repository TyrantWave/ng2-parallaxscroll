import { Component } from '@angular/core';
import { IParallaxScrollConfig } from 'projects/ng2-parallaxscroll/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-parallaxscroll-tester';

  config: IParallaxScrollConfig = {
    axis: 'Y',
    speed: -.5
  };

}
