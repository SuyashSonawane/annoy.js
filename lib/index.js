"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.effects = exports.Annoy = void 0;
const effects_1 = require("./effects");
exports.effects = effects_1.default;
require("./css/main.css");
class Annoy {
    constructor(elements, radius = 5) {
        this.radius = 5;
        this.debugMode = false;
        this.debugAnimationSpeed = 2;
        this.itemMap = new Map();
        this.act = (event) => __awaiter(this, void 0, void 0, function* () {
            if (this.debugMode) {
                if (this.cursorDiv === undefined) {
                    this.generateDebugItems(this.debugAnimationSpeed);
                }
                this.cursorDiv.style.top = `${event.clientY - (this.radius * 20)}px`;
                this.cursorDiv.style.left = `${event.clientX - (this.radius * 20)}px`;
            }
            for (let i = 0; i < this.dataset.length; i++) {
                const el = this.dataset[i];
                const elX = el.offsetLeft + el.clientWidth / 2;
                const elY = el.offsetTop + el.clientHeight / 2;
                const mouseX = event.clientX;
                const mouseY = event.clientY;
                const dist = Math.sqrt(Math.pow(mouseX - elX, 2) + Math.pow(mouseY - elY, 2));
                if (this.debugMode)
                    el.style.border = "none";
                if (dist - this.radius * 20 < 0) {
                    if (this.debugMode)
                        el.style.border = "2px solid black";
                    if (!this.itemMap.get(el).active) {
                        this.itemMap.get(el).active = true;
                        yield this.effect.actionDetected({ el, elX, elY, mouseX, mouseY });
                    }
                    yield this.effect.actionTime({ el, elX, elY, mouseX, mouseY });
                }
                else if (this.itemMap.get(el).active) {
                    this.itemMap.get(el).active = false;
                    yield this.effect.dispose({ el, elX, elY, mouseX, mouseY });
                }
            }
        });
        // TODO add checks for elements
        this.radius = radius;
        this.dataset = elements;
        for (let i = 0; i < this.dataset.length; i++) {
            const el = this.dataset[i];
            const elX = el.offsetLeft + el.clientWidth / 2;
            const elY = el.offsetTop + el.clientHeight / 2;
            let dataPoint = {
                el: el,
                className: el.className,
                id: el.id,
                x: 0,
                y: 0,
                active: false
            };
            this.itemMap.set(el, dataPoint);
        }
    }
    generateDebugItems(animationSpeed) {
        const style = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(style);
        this.cursorDiv = document.createElement('div');
        this.cursorDiv.style.border = '0.2px solid green';
        this.cursorDiv.style.width = `${this.radius * 20 * 2}px`;
        this.cursorDiv.style.height = `${this.radius * 20 * 2}px`;
        this.cursorDiv.style.borderRadius = '100%';
        this.cursorDiv.style.position = "absolute";
        this.cursorDiv.style.pointerEvents = "none";
        this.cursorDiv.id = "cursorDiv";
        this.cursorDiv.style.animation = `cursorDivAnimation ease-out ${(4 - animationSpeed) * 0.75}s infinite`;
        document.body.append(this.cursorDiv);
    }
    startAnnoying(effect) {
        this.effect = effect;
        document.addEventListener('mousemove', this.act, true);
    }
    stopIt() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setDebugMode(false);
            document.removeEventListener('mousemove', this.act, true);
        });
    }
    setDebugMode(status, animationSpeed = 2) {
        this.debugMode = status;
        this.debugAnimationSpeed = animationSpeed;
        if (this.debugMode === false) {
            if (this.cursorDiv)
                this.cursorDiv.remove();
            this.cursorDiv = null;
        }
    }
}
exports.Annoy = Annoy;
