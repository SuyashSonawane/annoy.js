// Types for internal use

// DataPoint type to represent the Element along with some properties
export type DataPoint = {
    el: Element,
    x: number,
    y: number,
    id: string,
    className: string,
    active: boolean
}

// FunctionDataPoint type to represent the HTML element along with some properties
export type FunctionDataPoint = {
    el: HTMLElement,
    elX: number,
    elY: number,
    mouseX: number,
    mouseY: number

}