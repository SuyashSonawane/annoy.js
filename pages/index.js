import { Annoy, effects } from '../src/index'
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

document.getElementById('debugMode').addEventListener('click', (e) => {
    if (ann)
        ann.setDebugMode(e.target.checked)

})
