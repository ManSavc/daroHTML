1,Turime akordų masyvą:
let accords = ["D", "G", "C", "C7", "F"];
2,Parašykite kodą, kuris prie akordo (raidės) pridės 7 -> G7. Tačiau jeigu prie akordo 7 jau yra - turime ignoruoti.
// core funkcija kuri eis per array ir grąžins rezultatą(naudoti metoda endsWith() pasigooglinti)
// callback funkcija kuri bus pritaikoma kiekvienam masyvo elementui
Test array	➞Expected Result
["G", "F", "C"] ➞ ["G7", "F7", "C7"

["Dm", "G7", "E", "A"] ➞ ["Dm7", "G7", "E7", "A7"]

["F", "E", "A7", "Ab7", "Gm7", "C7"] ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
