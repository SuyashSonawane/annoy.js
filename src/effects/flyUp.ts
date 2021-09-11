import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';

class FlyUp implements Effect {
    constructor(private wait = 100) { }
    actionDetected(data: FunctionDataPoint): void {
        data.el.style.animation = "vibrate 0.1s infinite ease"
        setTimeout(() => {
            data.el.style.animation = "none"
            data.el.style.transform = "translateY(-50px)"
        }, this.wait);
    }
    actionTime(data: FunctionDataPoint): void {
    }
    dispose(data: FunctionDataPoint): void {
        data.el.style.animation = "none"
        data.el.style.transform = "none"
    }

}

export default FlyUp