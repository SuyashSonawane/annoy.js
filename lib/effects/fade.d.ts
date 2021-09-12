import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';
declare class Fade implements Effect {
    private wait;
    constructor(wait?: number);
    actionDetected(data: FunctionDataPoint): void;
    actionTime(data: FunctionDataPoint): void;
    dispose(data: FunctionDataPoint): void;
}
export default Fade;
