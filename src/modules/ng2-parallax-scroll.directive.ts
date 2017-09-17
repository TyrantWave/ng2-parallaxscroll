import { IParallaxScrollConfig } from './ng2-parallax-scroll';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[parallax]'
})
export class ParallaxScrollDirective implements OnInit {

    @Input() private config: IParallaxScrollConfig;
    @Input() private axis: 'X' | 'Y' = 'Y';
    @Input() private speed: number = -.7;
    @Input() private initialValue = 0;
    @Input() private maxValue: number;
    @Input() private minValue: number;
    @Input() private cssUnit = 'px';
    @Input() private scrollerId: string;
    @Input() private parallaxElement: HTMLElement;

    private cssProperty = 'backgroundPosition';
    private scrollElement: any;
    private hostElement: HTMLElement;

    constructor(element: ElementRef) {
        this.hostElement = element.nativeElement;
    }

    public ngOnInit() {
        // Read config
        for (const prop in this.config) {
            if (this.config.hasOwnProperty(prop)) {
                (this as any)[prop] = (this.config as any)[prop];
            }
        }

        this.speed = +this.speed;
        this.initialValue = +this.initialValue;

        this.parallaxElement = this.parallaxElement || this.hostElement;

        // Grab scroll element
        if (this.scrollerId) {
            try {
                this.scrollElement = document.getElementById(this.scrollerId);
                if (!this.scrollElement) {
                    throw new Error((`ID ('${this.scrollerId}') does not exist! Using window`));
                }
            } catch (e) {
                // tslint:disable-next-line:no-console
                console.warn(e);
                this.scrollElement = window;
            }
        } else {
            this.scrollElement = window;
        }

        this.onScroll();

        this.scrollElement.addEventListener('scroll', this.onScroll.bind(this));
    }

    private onScroll = () => {
        let result: string;
        let scrollPosition: number;

        // Read scroll position * speed + initial val
        if (this.scrollElement instanceof Window) {
            scrollPosition = this.scrollElement.scrollY * this.speed + this.initialValue;
        } else {
            scrollPosition = this.scrollElement.scrollTop * this.speed + this.initialValue;
        }

        // Set limits
        if (this.maxValue !== undefined && scrollPosition >= this.maxValue) {
            scrollPosition = this.maxValue;
        } else if (this.minValue !== undefined && scrollPosition <= this.minValue) {
            scrollPosition = this.minValue;
        }

        // Get output based on axis
        if (this.axis === 'X') {
            result = 'calc(50% + ' + scrollPosition + this.cssUnit + ') center';
        } else {
            result = 'center calc(50% + ' + scrollPosition + this.cssUnit + ')';
        }

        this.parallaxElement.style[this.cssProperty as any] = result;
    }
}
