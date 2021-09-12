"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoveAround {
    constructor(strength = 5) {
        this.strength = strength;
        this.x = 0;
        this.y = 0;
    }
    actionDetected(data) { }
    actionTime({ el, mouseX, mouseY, elX, elY }) {
        let forceX, forceY;
        if (mouseX > elX) {
            if (mouseY > elY) {
                forceX = -this.strength;
                forceY = -this.strength;
            }
            else {
                forceX = -this.strength;
                forceY = this.strength;
            }
        }
        else {
            if (mouseY > elY) {
                forceX = this.strength;
                forceY = -this.strength;
            }
            else {
                forceX = this.strength;
                forceY = this.strength;
            }
        }
        forceX += this.x;
        forceY += this.y;
        this.x = forceX;
        this.y = forceY;
        el.style.transform = `translate(${forceX}px, ${forceY}px)`;
    }
    dispose(data) {
        data.el.style.transform = `none`;
    }
}
// moveAround: effects = (onDetect, actionTime, dispose) => { }
exports.default = MoveAround;
