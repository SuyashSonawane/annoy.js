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
const html_to_image_1 = require("html-to-image");
class ShadowClones {
    constructor(numClones = 5, wait = 500) {
        this.numClones = numClones;
        this.wait = wait;
        this.clonesArray = [];
    }
    makePositions(el) {
        let x = 0;
        let y = 0;
        let z = 0;
        let h = document.body.clientHeight - el.clientHeight;
        let w = document.body.clientWidth - el.clientWidth;
        x = Math.floor(Math.random() * h);
        y = Math.floor(Math.random() * w);
        z = Math.floor(Math.random() * 360);
        return { x, y, z };
    }
    actionDetected(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const imgData = yield (0, html_to_image_1.toPng)(data.el);
            for (let i = 0; i < this.numClones; i++) {
                let img = new Image();
                img.src = imgData;
                img.className = 'cloned-img';
                const { x, y } = this.makePositions(data.el);
                img.style.top = x + 'px';
                img.style.left = y + 'px';
                this.clonesArray.push(img);
                document.body.appendChild(img);
            }
            this.interval = setInterval(() => {
                this.clonesArray.forEach(el => {
                    const { x, y, z } = this.makePositions(el);
                    el.style.top = x + 'px';
                    el.style.left = y + 'px';
                    el.style.transform = 'rotate(' + z + 'deg)';
                });
            }, this.wait);
        });
    }
    actionTime(data) {
        // console.log('time')
    }
    dispose(data) {
        for (let i = 0; i < this.numClones; i++) {
            document.body.removeChild(this.clonesArray.pop());
        }
        clearInterval(this.interval);
    }
}
exports.default = ShadowClones;
