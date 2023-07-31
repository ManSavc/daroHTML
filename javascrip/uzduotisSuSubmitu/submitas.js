
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    const elementai = event.target.elements;
    const Vardas = elementai.fname.value;
    const Paarde = elementai.lname.value;
    // document.getElementById("demo").textContent =`Vardas ${Vardas} pavarde ${Paarde} `; //po nauja owerwrite eilute
    document.getElementById("demo").innerHTML +=`Vardas ${Vardas} pavarde ${Paarde} <br> `; //naujoj eilutj veda
});




