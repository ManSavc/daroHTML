const arrejus = ["I", "study", "JavaScript", "right", "now"];

const box = document.createElement("div");
box.id = "demo";
document.body.appendChild(box);

document.getElementById("demo").innerHTML ='pradinis '+arrejus+ "<br>";
document.getElementById("demo").innerHTML +='pasalinam  '+arrejus[0] + arrejus[1] + arrejus[2] + "<br>";
arrejus.splice(0, 3, 'Lets', 'dance');
document.getElementById("demo").innerHTML +='gausime   '+arrejus+ "<br>";
let print = document.createElement("p");
let joined = arrejus.join(' | ');
document.getElementById("demo").innerHTML += 'stringas' + joined;