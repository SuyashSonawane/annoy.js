import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';
declare class Wall implements Effect {
    private wait;
    constructor(wait?: number);
    private wall;
    actionDetected(data: FunctionDataPoint): void;
    actionTime(data: FunctionDataPoint): void;
    dispose(data: FunctionDataPoint): void;
}
export default Wall;
