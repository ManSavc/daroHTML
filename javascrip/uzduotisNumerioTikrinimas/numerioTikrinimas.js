//---------------uzduoties stiliaus parametrai ----------------


//     box-sizing: border-box;
// }
//
// form {
//     width: 400px;
//     margin: 50px auto;
// }
//
// form input {
//     width: 100%;
//     padding: 10px;
// }


let box = document.createElement("p");
box.style.width = '400px';
box.style.height = '50px ';
let boxR1 = document.createElement("p");
boxR1.style.width = '100%';
boxR1.style.padding = '10px';

let box2 = document.createElement("p");
box2.style.width = '400px';
box2.style.height = '50px ';

let boxR2 = document.createElement("p");
boxR2.style.width = '100%';
boxR2.style.padding = '10px';
let stalas = document.querySelector('body');
stalas.append(boxR2, box2);
stalas.prepend(box, boxR1);
document.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key >= 0) {
        box.innerHTML = 'Tai skaicius tarp 0 ir 99 ';
        box.style.backgroundColor = 'green';
        boxR1.innerHTML = key;
        boxR1.style.border = "1px solid black";
    } else {
        box2.innerHTML = 'Tai ne raide arba skaicius ne tarp 0 ir 99 ';
        box2.style.backgroundColor = 'red';
        boxR2.innerHTML = key;
        boxR2.style.border = "1px solid black";
    }
});


