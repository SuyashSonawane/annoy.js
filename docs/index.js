import Annoy from '../src'
let elements = document.getElementsByClassName("fun")
let a = new Annoy(elements, 2)
a.startAnnoying()
a.setDebugMode(true)
// setTimeout(() => {

//     a.stopIt()
// }, 1000);
