import { DataPoint } from './types';

class Annoy {
    private dataset: HTMLCollection;
    private itemMap: Map<Element, DataPoint> = new Map();
    private radius: number = 5;
    private debugMode: boolean = false;
    private cursorDiv: HTMLElement;
    constructor(elements: HTMLCollection, radius: number = 5) {
        // TODO add checks for elements
        this.radius = radius;
        this.dataset = elements
        for (let i = 0; i < this.dataset.length; i++) {
            const el: Element = this.dataset[i];
            let dataPoint: DataPoint = {
                el: el,
                className: el.className,
                id: el.id,
                x: el.clientLeft + el.scrollLeft + el.clientWidth / 2,
                y: el.clientTop + el.scrollTop + el.clientHeight / 2
            };

            this.itemMap.set(el, dataPoint)
            console.log('done')
        }
    }
    private act = (event: MouseEvent) => {
        if (this.debugMode) {
            if (this.cursorDiv === undefined) {
                this.cursorDiv = document.createElement('div')
                this.cursorDiv.style.border = '2px solid black'
                this.cursorDiv.style.width = `${this.radius * 50}px`
                this.cursorDiv.style.height = `${this.radius * 50}px`
                this.cursorDiv.style.borderRadius = '50%'
                this.cursorDiv.style.position = "absolute"
                document.body.append(this.cursorDiv)

                console.log(this.cursorDiv)
            }
            this.cursorDiv.style.top = `${event.clientY - (this.radius * 50) / 2}px`
            this.cursorDiv.style.left = `${event.clientX - (this.radius * 50) / 2}px`
        }
        for (let i = 0; i < this.dataset.length; i++) {
            const el: Element = this.dataset[i];
            const elX = (el as HTMLElement).offsetLeft + el.clientWidth / 2;
            const elY = (el as HTMLElement).offsetTop + el.clientHeight / 2;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const dist = Math.sqrt(Math.pow(mouseX - elX, 2) + Math.pow(mouseY - elY, 2));
            (el as HTMLElement).style.border = "none"
            console.log(el.id)
            if (dist - this.radius * 50 < 0) {
                (el as HTMLElement).style.border = "2px solid black"
                console.log(el.id)

            }
        }
    }
    startAnnoying() {
        document.addEventListener('mousemove', this.act, true)
    }
    stopIt() {
        document.removeEventListener('mousemove', this.act, true)
    }
    setDebugMode(status: boolean) {
        this.debugMode = status
    }

}

module.exports = Annoy