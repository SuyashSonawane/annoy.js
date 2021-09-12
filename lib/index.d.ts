import effects from './effects';
import { Effect } from './interfaces';
import "./css/main.css";
declare class Annoy {
    private effect;
    private radius;
    private cursorDiv;
    private dataset;
    private debugMode;
    private debugAnimationSpeed;
    private itemMap;
    constructor(elements: HTMLCollection, radius?: number);
    private generateDebugItems;
    private act;
    startAnnoying(effect: Effect): void;
    stopIt(): Promise<void>;
    setDebugMode(status: boolean, animationSpeed?: number): void;
}
export { Annoy, effects };
