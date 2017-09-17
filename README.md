# ng2-parallaxscroll

A parallax directive for Angular 2+.

See an example here: https://tyrantwave.github.io/ng2-parallaxscroll/

## Installation

 - Install from npm:
```
npm install --save ng2-parallaxscroll
```

 - Clone from git:
```
git clone https://github.com/TyrantWave/ng2-parallaxscroll
```

## Importing to your application

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

## Using in your application

### Component
Use the component, providing the image URL, styling CSS for size and an optional config:
```html
<ng-parallax img="path/to/img" [config]="someConfig" class="some-class"></ng-parallax>
```
CSS example:
```css
.some-class {
  height: 300px;
  width: 75%;
}
```

### Directive
Put the directive on any component you have styled for it:
```html
<div parallax class="some-parallax"></div>
```
CSS:
 - Note here you can set the background-size too.
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
initialValue    | initial position in pixels
maxValue        | maximum value for transform
minValue        | minimum value for transform
cssUnit         | css unit to use for transform - px, %, vh, em etc.
scrollerId      | if given, used to set the ID of which element is used to track scrolling. Defaults to window.  
parallaxElement | If given, which element should scroll  



## License
MIT
