import { Effects } from '../interfaces';
import { FunctionDataPoint } from '../types';

class MoveAround implements Effects {
    private x = 0;
    private y = 0;
    constructor(private strength: number = 5) { }
    actionDetected(data: FunctionDataPoint): void {
        // console.log('action detected')
    }
    actionTime({ el, mouseX, mouseY, elX, elY }: FunctionDataPoint): void {
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
        forceX += this.x
        forceY += this.y

        this.x = forceX
        this.y = forceY
        el.style.transform = `translate(${forceX}px, ${forceY}px)`
        el.style.top = `${forceX}px`
        el.style.left = `${forceY}px`
    }
    dispose(data: FunctionDataPoint): void {
        console.log('action disposed')
    }



}


// moveAround: effects = (onDetect, actionTime, dispose) => { }

export default MoveAround;