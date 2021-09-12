import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';
declare class MoveAround implements Effect {
    private strength;
    private x;
    private y;
    constructor(strength?: number);
    actionDetected(data: FunctionDataPoint): void;
    actionTime({ el, mouseX, mouseY, elX, elY }: FunctionDataPoint): void;
    dispose(data: FunctionDataPoint): void;
}
export default MoveAround;
