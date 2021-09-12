import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';
declare class ShadowClones implements Effect {
    private numClones;
    private wait;
    private clonesArray;
    constructor(numClones?: number, wait?: number);
    private interval;
    makePositions(el: HTMLElement): {
        x: number;
        y: number;
        z: number;
    };
    actionDetected(data: FunctionDataPoint): Promise<void>;
    actionTime(data: FunctionDataPoint): void;
    dispose(data: FunctionDataPoint): void;
}
export default ShadowClones;
