let what = ["The car", "The train", "The ferry"];
let did = ["broke down", "run out of gas", "burned down", "was stolen"];
let when = ["yesterday", "this morning", "right before I was ready to leave", "three hours ago"];


 let indexWhat = Math.floor(Math.random()*what.length);
console.log(what[indexWhat]);
 let indexDid = Math.floor(Math.random()*did.length);
console.log(did[indexDid]);
 let indexWhen = Math.floor(Math.random()*when.length);
console.log(when[indexWhen]);

document.getElementById("excu").innerHTML=what[indexWhat] +" "+ did[indexDid] + " " +when[indexWhen] + "." ;


//function getRndInteger("demo") {
 // return Math.floor(Math.random() * .length );}


