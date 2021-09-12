import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';
declare class ZaWarudo implements Effect {
    private wait;
    private numColors;
    constructor(wait?: number, numColors?: number);
    private spheres;
    private audio;
    actionDetected(data: FunctionDataPoint): void;
    actionTime(data: FunctionDataPoint): void;
    dispose(data: FunctionDataPoint): void;
}
export default ZaWarudo;
