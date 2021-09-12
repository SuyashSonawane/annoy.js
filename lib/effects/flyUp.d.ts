import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';
declare class FlyUp implements Effect {
    private wait;
    constructor(wait?: number);
    actionDetected(data: FunctionDataPoint): void;
    actionTime(data: FunctionDataPoint): void;
    dispose(data: FunctionDataPoint): void;
}
export default FlyUp;
