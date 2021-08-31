import { DataPoint } from './types';

class Annoy {
    private dataset: HTMLCollection;
    private itemMap: Map<HTMLElement, DataPoint> = new Map();
    private radius: number = 5;
    private debugAnimationSpeed: number = 2;
    private strength: number = 1;
    private debugMode: boolean = false;
    private cursorDiv: HTMLElement;

    constructor(elements: HTMLCollection, radius: number = 5) {
        // TODO add checks for elements
        this.radius = radius;
        this.dataset = elements
        for (let i = 0; i < this.dataset.length; i++) {
            const el: HTMLElement = (this.dataset[i] as HTMLElement);
            const elX = el.offsetLeft + el.clientWidth / 2;
            const elY = el.offsetTop + el.clientHeight / 2;
            let dataPoint: DataPoint = {
                el: el,
                className: el.className,
                id: el.id,
                x: elX,
                y: elY
            };

            this.itemMap.set(el, dataPoint)
        }
    }
    private generateDebugItems(animationSpeed: number) {
        this.cursorDiv = document.createElement('div')
        this.cursorDiv.style.border = '0.2px solid green'
        this.cursorDiv.style.width = `${this.radius * 20 * 2}px`
        this.cursorDiv.style.height = `${this.radius * 20 * 2}px`
        this.cursorDiv.style.borderRadius = '100%'
        this.cursorDiv.style.position = "absolute"
        this.cursorDiv.id = "cursorDiv"

        document.styleSheets[0].insertRule(`
            @keyframes cursorDivAnimation {
            0% {
                transform: scale(0.95);
                box-shadow: 0 0 0 100px rgba(18, 173, 44, 0.472) inset;
            }

            70% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset;
            }

            100% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset;
            }
        }
        `)

        this.cursorDiv.style.animation = `cursorDivAnimation ease-out ${(4 - animationSpeed) * 0.75}s infinite`
        document.body.append(this.cursorDiv)
    }
    private act = (event: MouseEvent) => {
        if (this.debugMode) {
            if (this.cursorDiv === undefined) {
                this.generateDebugItems(this.debugAnimationSpeed)
            }
            this.cursorDiv.style.top = `${event.clientY - (this.radius * 20)}px`
            this.cursorDiv.style.left = `${event.clientX - (this.radius * 20)}px`
        }
        for (let i = 0; i < this.dataset.length; i++) {
            const el: HTMLElement = (this.dataset[i] as HTMLElement);
            const elX = (el as HTMLElement).offsetLeft + el.clientWidth / 2;
            const elY = (el as HTMLElement).offsetTop + el.clientHeight / 2;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const dist = Math.sqrt(Math.pow(mouseX - elX, 2) + Math.pow(mouseY - elY, 2));
            if (this.debugMode)
                el.style.border = "none"
            if (dist - this.radius * 20 < 0) {
                if (this.debugMode)
                    el.style.border = "2px solid black"

                let forceX: number, forceY: number;

                if (mouseX > elX) {
                    if (mouseY > elY) {
                        forceX = -this.strength
                        forceY = -this.strength
                    }
                    else {

                        forceX = -this.strength
                        forceY = this.strength
                    }
                }
                else {
                    if (mouseY > elY) {
                        forceX = this.strength
                        forceY = -this.strength
                    }
                    else {

                        forceX = this.strength
                        forceY = this.strength
                    }
                }
                console.log(elX, elY)
                forceX += this.itemMap.get(el).x
                forceY += this.itemMap.get(el).y

                this.itemMap.get(el).x = forceX
                this.itemMap.get(el).y = forceY
                // el.style.transform = `translate(${forceX}px, ${forceY}px)`
                el.style.top = `${forceX}px`
                el.style.left = `${forceY}px`

            }
        }
    }
    startAnnoying() {
        document.addEventListener('mousemove', this.act, true)
    }
    stopIt() {
        document.removeEventListener('mousemove', this.act, true)
    }
    setDebugMode(status: boolean, animationSpeed: number = 2) {
        this.debugMode = status
        this.debugAnimationSpeed = animationSpeed
    }

}

module.exports = Annoy