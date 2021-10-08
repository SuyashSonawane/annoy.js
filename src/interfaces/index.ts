import { FunctionDataPoint } from "../types";

// Effect interface used to enforce implementations of necessary methods
interface Effect {
    actionDetected(data: FunctionDataPoint): void,
    actionTime(data: FunctionDataPoint): void,
    dispose(data: FunctionDataPoint): void
}
export { Effect }