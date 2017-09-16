import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/*
    Optional values to supply to the scroll directive
*/
export interface IParallaxScrollConfig {
    // axis to scroll the parallax on
    axis?: string;

    // speed to scroll, negative to change direction
    speed?: number;

    // initial position value in pixels - defaults to 0
    initialValue?: number;

    // maximum css transform
    maxValue?: number;

    // minimum css transform
    minValue?: number;

    //  unit to use for transform (e.g. 'px', '%', etc)
    cssUnit?: string;

    // the id for the element on the page you'd like to track the scrolling of in the
    // case where the element is not available in the current component;
    // if no id is defined along with no scrollElement below,
    // it defaults to the scrolling of the body
    scrollerId?: string;

    // the element in the current component that you'd like the directive to track its
    // position as it scrolls;  gets assigned to the body if nothing is defined
    scrollElement?: HTMLElement;

    // the element that you'd like the effects from scrolling the scrollElement applied
    // to; essentially the element that moves as you scroll
    parallaxElement?: HTMLElement;

    // what you want to call it to find the particular instance of it if you need to debug
    name?: string;
}

@Directive({
    selector: '[parallax]'
})
export class ParallaxScrollDirective implements OnInit {
    public name = 'parallaxScrollDirective';

    @Input() private config: IParallaxScrollConfig;
    @Input() private axis: 'X' | 'Y' = 'Y';
    @Input() private speed: number = -.7;
    @Input() private initialValue = 0;
    @Input() private maxValue: number;
    @Input() private minValue: number;
    @Input() private cssUnit = 'px';
    @Input() private scrollerId: string;
    @Input() private scrollElement: any;
    @Input() private parallaxElement: HTMLElement;

    private cssProperty = 'backgroundPosition';
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

        // Set css property to adjust - backgroundPosition[X|Y]
        this.cssProperty += this.axis;

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
