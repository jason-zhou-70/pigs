import { PigController } from './pigController'
import { Pig } from './pig'
import { GreyPig } from './greyPig'
import { Breed } from './pigInterface';

var controller = new PigController();

document.getElementById("add")!.addEventListener('click', function(){
    var pig = new GreyPig("Pork Chop", Breed.Potbelly, 10, 20, "Fair", 50);
    controller.add(pig);
})

document.getElementById("display")!.addEventListener('click', function(){
    console.log(controller.showAll());
})