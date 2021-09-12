"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fade {
    constructor(wait = 100) {
        this.wait = wait;
    }
    actionDetected(data) {
        data.el.style.animation = "fade 0.5s ease forwards";
        data.el.style.pointerEvents = "none";
    }
    actionTime(data) {
    }
    dispose(data) {
        data.el.style.animation = "none";
        data.el.style.pointerEvents = "default";
    }
}
exports.default = Fade;
