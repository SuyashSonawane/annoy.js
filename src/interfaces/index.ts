import { FunctionDataPoint } from "../types";

interface Effects {
    actionDetected(data: FunctionDataPoint): void,
    actionTime(data: FunctionDataPoint): void,
    dispose(data: FunctionDataPoint): void,
}
export { Effects }