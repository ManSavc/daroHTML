const boxChoice = document.createElement("div");
document.body.appendChild(boxChoice);
boxChoice.id = 'boxChoice';
document.getElementById("boxChoice").innerHTML = 'Pasirinkite norimą akordą ';


let btn = document.createElement("button");
btn.textContent = "(\"D\", \"G\", \"C\", \"C7\", \"F\")";
btn.name = "mybtn";
btn.style.padding = '10px';
btn.style.marginRight = '10px';
document.body.appendChild(btn);
const button = document.querySelector('button');


let btn1 = document.createElement("button");
btn1.textContent = "[\"G\", \"F\", \"C\"] ";
btn1.name = "mybtn";
btn1.style.padding = '10px';
btn1.style.marginRight = '10px';
document.body.appendChild(btn1);
const button1 = document.querySelector('button');


let btn2 = document.createElement("button");
btn2.textContent = ["Dm", "G7", "E", "A"];
btn2.name = "mybtn2";
btn2.style.padding = '10px';
btn2.style.marginRight = '10px';
document.body.appendChild(btn2);
const button2 = document.querySelector('button');


let btn3 = document.createElement("button");
btn3.textContent = "[\"F\", \"E\", \"A7\", \"Ab7\", \"Gm7\", \"C7\"] ";
btn3.name = "mybtn2";
btn3.style.padding = '10px';
document.body.appendChild(btn3);
const button3 = document.querySelector('button');

const boxAts = document.createElement("div");
document.body.appendChild(boxAts);
boxAts.id = 'answer';
document.getElementById("answer").innerHTML = 'Atsakymas ';
//-------------------------------

const box = document.createElement("div");
document.body.appendChild(box);
box.id = 'demo';
box.style.width = '300px';
box.style.padding = '10px';
box.style.backgroundColor = 'green';

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let naujasMasyvasAkordams = [];

function myCalculator(accords, myCallback) {
    for (let i = 0; i < accords.length; i++) {
        if (accords[i].endsWith('7')) {
            naujasMasyvasAkordams[i] = accords[i];
        } else {
            naujasMasyvasAkordams[i] = accords[i].concat('7')
        }
        myCallback(naujasMasyvasAkordams);
    }
}
btn.addEventListener('click', function () {
        naujasMasyvasAkordams = [];
        console.log('Button abc clicked!');
        accords = ["D", "G", "C", "C7", "F"];
        myCalculator(accords, myDisplayer)
    }
)

btn1.addEventListener('click', function () {
        naujasMasyvasAkordams = [];
        console.log('Button 1 clicked!');
        accords = ["G", "F", "C"] ;
        myCalculator(accords, myDisplayer)
    }
)


let accords = [];
btn2.addEventListener('click', function () {
        naujasMasyvasAkordams = [];
        console.log("ilgis masyvo accorda" + accords.length)
        console.log('Button 2 clicked!');
        accords = ["Dm", "G7", "E", "A"];
        myCalculator(accords, myDisplayer)
    }
)
btn3.addEventListener('click', function () {
        naujasMasyvasAkordams = [];
        console.log("ilgis masyvo accorda" + accords.length)
        console.log('Button 3 clicked!');
        accords = ["F", "E", "A7", "Ab7", "Gm7", "C7"];
        myCalculator(accords, myDisplayer)
    }
)
