"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wall {
    constructor(wait = 100) {
        this.wait = wait;
    }
    actionDetected(data) {
        let width = data.el.clientWidth + 10;
        let height = data.el.clientHeight + 10;
        this.wall = document.createElement('div');
        this.wall.className = 'wall';
        let wallHeight = Math.floor(height / 35);
        console.log(wallHeight);
        for (let i = 0; i < wallHeight; i++) {
            let row = document.createElement('div');
            row.className = "row";
            for (let i = 0; i < 10; i++) {
                let brick = document.createElement('div');
                brick.className = 'brick';
                row.appendChild(brick);
            }
            this.wall.appendChild(row);
        }
        document.body.appendChild(this.wall);
        this.wall.style.width = width + 'px';
        setTimeout(() => {
            this.wall.style.top = (data.elY - height / 2) + 'px';
            this.wall.style.left = (data.elX - width / 2) + 'px';
        }, 50);
    }
    actionTime(data) {
    }
    dispose(data) {
        data.el.style.animation = "none";
        data.el.style.pointerEvents = "default";
        document.body.removeChild(this.wall);
    }
}
exports.default = Wall;
