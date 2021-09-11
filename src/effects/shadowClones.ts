import { Effect } from '../interfaces';
import { FunctionDataPoint } from '../types';
import { toPng } from 'html-to-image'

class ShadowClones implements Effect {
    private clonesArray: Array<HTMLElement> = [];
    constructor(private numClones = 5, private wait = 500) { }

    private interval;

    makePositions(el: HTMLElement) {
        let x = 0;
        let y = 0;
        let z = 0;
        let h = document.body.clientHeight - el.clientHeight;
        let w = document.body.clientWidth - el.clientWidth;

        x = Math.floor(Math.random() * h);
        y = Math.floor(Math.random() * w);
        z = Math.floor(Math.random() * 360);

        return { x, y, z }
    }

    async actionDetected(data: FunctionDataPoint): Promise<void> {
        const imgData = await toPng(data.el)
        for (let i = 0; i < this.numClones; i++) {
            let img = new Image();
            img.src = imgData;
            img.className = 'cloned-img'
            const { x, y } = this.makePositions(data.el)
            img.style.top = x + 'px'
            img.style.left = y + 'px'
            this.clonesArray.push(img)
            document.body.appendChild(img);
        }

        this.interval = setInterval(() => {
            this.clonesArray.forEach(el => {
                const { x, y, z } = this.makePositions(el)
                el.style.top = x + 'px'
                el.style.left = y + 'px'
                el.style.transform = 'rotate(' + z + 'deg)'
            })
        }, this.wait)

    }
    actionTime(data: FunctionDataPoint): void {
        // console.log('time')
    }
    dispose(data: FunctionDataPoint): void {
        for (let i = 0; i < this.numClones; i++) {
            document.body.removeChild(this.clonesArray.pop());
        }
        clearInterval(this.interval)
    }

}

export default ShadowClones