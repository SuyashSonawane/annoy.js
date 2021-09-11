import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';

class Fade implements Effect {
    constructor(private wait = 100) { }
    actionDetected(data: FunctionDataPoint): void {
        data.el.style.animation = "fade 0.5s ease forwards"
        data.el.style.pointerEvents = "none"
    }
    actionTime(data: FunctionDataPoint): void {
    }
    dispose(data: FunctionDataPoint): void {
        data.el.style.animation = "none"
        data.el.style.pointerEvents = "default"
    }

}

export default Fade