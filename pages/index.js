import { Annoy, effects } from '../lib/index'
let elements = document.getElementsByClassName("fun")
let selectEffects = document.getElementById('effects')

let vEffects = Object.keys(effects)
let i = 0;
vEffects.forEach(effect => {
    let option = document.createElement("option");
    option.text = effect;
    option.value = i;
    selectEffects.add(option);
    i++;
})

let ann = null;

function startShow(id) {
    if (ann) {
        ann.stopIt()
    }
    ann = new Annoy(elements, 8)
    // a.setDebugMode(true)

    ann.startAnnoying(new (Object.values(effects)[id]))
}

selectEffects.addEventListener('change', (e) => {
    startShow(e.target.value)
})

startShow(0)


// let f = true;
// const toggle = () => {
//     if (f) {
//         document.body.style.cursor = "none"
//         document.getElementById('action').style.cursor = "none"
//         document.getElementsByTagName('html')[0].style.filter = "invert(1) hue-rotate(180deg)"
//     }
//     else {

//         document.getElementById('action').style.cursor = "pointer"
//         document.body.style.cursor = "default"
//         document.getElementsByTagName('html')[0].style.filter = "none"
//     }

//     f = !f
// }

// document.getElementById('action').addEventListener('click', toggle)
