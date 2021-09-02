import { Annoy, allEffects } from '../src/index'
let elements = document.getElementsByClassName("fun")
let a = new Annoy(elements, 7)
a.startAnnoying(new allEffects.moveAround())
let f = true;
const toggle = () => {
    if (f) {
        document.body.style.cursor = "none"
        document.getElementById('action').style.cursor = "none"
        document.getElementsByTagName('html')[0].style.filter = "invert(1) hue-rotate(180deg)"
    }
    else {

        document.getElementById('action').style.cursor = "pointer"
        document.body.style.cursor = "default"
        document.getElementsByTagName('html')[0].style.filter = "none"
    }

    f = !f
}

document.getElementById('action').addEventListener('click', toggle)
