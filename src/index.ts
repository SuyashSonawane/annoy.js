import { DataPoint } from './types';
import effects from './effects'
import { Effect } from './interfaces';
import "./css/main.css"
class Annoy {
    private effect: Effect;
    private radius: number = 5;
    private cursorDiv: HTMLElement;
    private dataset: HTMLCollection;
    private debugMode: boolean = false;
    private debugAnimationSpeed: number = 2;
    private itemMap: Map<HTMLElement, DataPoint> = new Map();

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
                x: 0,
                y: 0,
                active: false
            };

            this.itemMap.set(el, dataPoint)
        }
    }
    private generateDebugItems(animationSpeed: number) {
        const style = document.createElement('style')
        document.getElementsByTagName('head')[0].appendChild(style)
        this.cursorDiv = document.createElement('div')
        this.cursorDiv.style.border = '0.2px solid green'
        this.cursorDiv.style.width = `${this.radius * 20 * 2}px`
        this.cursorDiv.style.height = `${this.radius * 20 * 2}px`
        this.cursorDiv.style.borderRadius = '100%'
        this.cursorDiv.style.position = "absolute"
        this.cursorDiv.style.pointerEvents = "none"
        this.cursorDiv.id = "cursorDiv"

        this.cursorDiv.style.animation = `cursorDivAnimation ease-out ${(4 - animationSpeed) * 0.75}s infinite`
        document.body.append(this.cursorDiv)
    }
    private act = async (event: MouseEvent) => {
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
                if (!this.itemMap.get(el).active) {
                    this.itemMap.get(el).active = true
                    await this.effect.actionDetected({ el, elX, elY, mouseX, mouseY })
                }

                await this.effect.actionTime({ el, elX, elY, mouseX, mouseY })

            }
            else if (this.itemMap.get(el).active) {
                this.itemMap.get(el).active = false
                await this.effect.dispose({ el, elX, elY, mouseX, mouseY })
            }
        }
    }
    startAnnoying(effect: Effect) {
        this.effect = effect
        document.addEventListener('mousemove', this.act, true)
    }
    async stopIt() {
        this.setDebugMode(false);
        document.removeEventListener('mousemove', this.act, true)
    }
    setDebugMode(status: boolean, animationSpeed: number = 2) {
        this.debugMode = status
        this.debugAnimationSpeed = animationSpeed

        if (this.debugMode === false) {
            if (this.cursorDiv)
                this.cursorDiv.remove()
            this.cursorDiv = undefined
        }
    }

}

export { Annoy, effects }