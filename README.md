# ng2-parallaxscroll

A parallax directive for Angular 2+.

## Installation

 - Install from npm:
```
npm install --save ng2-parallaxscroll
```

 - Clone from git:
```
git clone https://github.com/TyrantWave/ng2-parallaxscroll
```

## Use in your application

Reference the directive in the main module:

 - If you installed from npm:
```typescript
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
```

 - Or from local source:
```typescript
import { ParallaxScrollModule } from './path/to/directives/ng2-parallax-scroll.directive';
```

Then in your base module:
```typescript
imports: [
    ParallaxScrollModule,
]
```

Finally, to use it in the application you put the directive on any component you have styled for it:
```html
<div parallax class="some-parallax"></div>
```
CSS:
```css
.some-parallax {
  background-image: url('/parallax_img.jpg');
  background-size: 100%;
  height: 300px;
  width: 100%;
}
```

## Customisation

The parallax can accept a [config] value through the template:
```html
<div parallax class='blah' [config]="{axis: x, speed: -.3}">
```

Or you can import the `IParallaxScrollConfig` type for linting.

The config gives the following options:

Value           | Use
--------------- | ---------------
axis            | axis to scroll on, X or Y
speed           | speed to scroll at; can be negative to change direction
intialValue     | initial position in pixels
maxValue        | maximum value
minValue        | minimum value
cssUnit         | css unit to use for transform - px, %, vh, em etc.
scrollerId      | if given, used to set the ID of which element is used to track scrolling. Defaults to window.  
parallaxElement | If given, which element should scroll  



## License
MIT
