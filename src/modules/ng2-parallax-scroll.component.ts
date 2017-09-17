import { IParallaxScrollConfig } from './ng2-parallax-scroll';
import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'ng-parallax',
    template: `
        <div parallax [config]="config"
            [ngStyle]="parallaxStyles"
            [ngClass]="paraClass">
            <ng-content></ng-content>
        </div>
    `,
    // tslint:disable-next-line:object-literal-sort-keys
    styles: [`
        :host {
            display: block;
        }
    `]
})
export class ParallaxScrollComponent implements OnInit {

    @Input() public config: IParallaxScrollConfig;
    @Input('img') public img: string;
    // tslint:disable-next-line:no-input-rename
    @Input('class') public paraClass: string;

    public parallaxStyles: any;

    public ngOnInit() {

        this.parallaxStyles = {
            'background-image': this.img ? 'url(' + this.img + ')' : '',
            'height': '100%',
            'width': '100%'
        };
    }
}
