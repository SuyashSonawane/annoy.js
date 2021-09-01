import Annoy from '../src/index'
let elements = document.getElementsByClassName("fun")
let a = new Annoy(elements, 7)
a.startAnnoying()
// a.setDebugMode(true, 10)
// setTimeout(() => {

//     a.stopIt()
// }, 1000);
