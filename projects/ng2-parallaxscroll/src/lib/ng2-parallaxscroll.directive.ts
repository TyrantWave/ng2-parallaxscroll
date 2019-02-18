import { IParallaxScrollConfig } from './ng2-parallaxscroll';
import { Directive, ElementRef, PLATFORM_ID, Inject, Input, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[parallax]'
})
export class ParallaxScrollDirective implements OnInit {

    @Input() private config: IParallaxScrollConfig;
    @Input() private axis: 'X' | 'Y' = 'Y';
    @Input() private speed = -.7;
    @Input() private initialValue = 0;
    @Input() private maxValue: number;
    @Input() private minValue: number;
    @Input() private cssUnit = 'px';
    @Input() private scrollerId: string;
    @Input() private parallaxElement: HTMLElement;

    private cssProperty = 'backgroundPosition';
    private scrollElement: any;
    private hostElement: HTMLElement;
    private backupElement: any;
    private testBrowser: boolean;

    constructor(
        element: ElementRef,
        // tslint:disable-next-line:ban-types
        @Inject(PLATFORM_ID) private platformId: Object) {
        this.hostElement = element.nativeElement;
        this.testBrowser = isPlatformBrowser(this.platformId);
        // If the window exists, grab it, else set to hostElement to prevent errors
        this.backupElement = this.testBrowser ? window : this.hostElement;
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
                    throw new Error((`ID ('${this.scrollerId}') does not exist! Using default`));
                }
            } catch (e) {
                this.scrollElement = this.backupElement;
            }
        } else {
            this.scrollElement = this.backupElement;
        }

        this.onScroll();

        this.scrollElement.addEventListener('scroll', this.onScroll.bind(this));
    }

    private onScroll = () => {
        let result: string;
        let scrollPosition: number;

        // Read scroll position * speed + initial val
        if (this.testBrowser && this.scrollElement instanceof Window) {
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