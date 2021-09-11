import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';

class MoveAround implements Effect {
    private x = 0;
    private y = 0;
    constructor(private strength: number = 5) { }

    actionDetected(data: FunctionDataPoint): void { }
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
    }
    dispose(data: FunctionDataPoint): void {
        data.el.style.transform = `none`
    }

}


// moveAround: effects = (onDetect, actionTime, dispose) => { }

export default MoveAround;