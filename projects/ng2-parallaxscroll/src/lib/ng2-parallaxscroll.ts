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

    // if given, used to set the ID of the element used to track the scroll events
    scrollerId?: string;

    // what element moves when you scroll, defaults to the body
    parallaxElement?: HTMLElement;

    // parallax pivot of the axis - default to '50%'
    parallaxPivot?: string;
}
