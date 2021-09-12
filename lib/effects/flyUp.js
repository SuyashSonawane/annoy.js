"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FlyUp {
    constructor(wait = 100) {
        this.wait = wait;
    }
    actionDetected(data) {
        data.el.style.animation = "vibrate 0.1s infinite ease";
        setTimeout(() => {
            data.el.style.animation = "none";
            data.el.style.transform = "translateY(-50px)";
        }, this.wait);
    }
    actionTime(data) {
    }
    dispose(data) {
        data.el.style.animation = "none";
        data.el.style.transform = "none";
    }
}
exports.default = FlyUp;
