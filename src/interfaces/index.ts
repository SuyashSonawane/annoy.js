import { FunctionDataPoint } from "../types";

interface Effect {
    actionDetected(data: FunctionDataPoint): void,
    actionTime(data: FunctionDataPoint): void,
    dispose(data: FunctionDataPoint): void
}
export { Effect }