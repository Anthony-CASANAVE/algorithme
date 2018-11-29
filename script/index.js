//let height = parseInt(prompt("Entrez une hauteur"));
//console.log("Hauteur entrée : " + height);
//
//let weight = parseInt(prompt("Entrez une largeur"));
//console.log("Largeur entrée : " + weight);
//
//let perimeter = (height * 2) + (weight * 2);
//
//let aire = height * weight;
//
//console.log("Le périmètre de votre rectangle est : " + "2" + "*" + height + " + " + "2" + "*" + weight + " = " + (height * 2) + "+" + (weight * 2) + " = " + perimeter + ".");
//
//
//console.log("L'aire de votre rectangle est : " + height + "*" + weight + " = " + aire + ".");
//
////______________ ____Fin exos 1 et 2____ ______________
//
//
//let jours = parseInt(prompt("Entrez un nombre de jours a onvertir en secondes :"));
//console.log("Nombre de jours entré : " + jours);
//
//let heures = parseInt(prompt("Entrez un nombre de heures a onvertir en secondes :"));
//console.log("Nombre de heures entré : " + heures);
//
//let minutes = parseInt(prompt("Entrez un nombre de minutes a onvertir en secondes :"));
//console.log("Nombre de minutes entré : " + minutes);
//
//let calculeSecondes = (((((jours * 24) + heures) * 60) + minutes) * 60);
//
//console.log(jours + " jours + " + heures + " heures + " + minutes + " minutes convertis en secondes est égale à " + calculeSecondes + " secondes.");
//
//
//let jours2 = parseInt(prompt("Entrez de nouveau un nombre de jours a onvertir en secondes :"));
//console.log("Nombre de jours entré : " + jours2);
//
//let heures2 = parseInt(prompt("Entrez de nouveau un nombre de heures a onvertir en secondes :"));
//console.log("Nombre de heures entré : " + heures2);
//
//let minutes2 = parseInt(prompt("Entrez de nouveau un nombre de minutes a onvertir en secondes :"));
//console.log("Nombre de minutes entré : " + minutes2);
//
//let calculeSecondes2 = (((((jours2 * 24) + heures2) * 60) + minutes2) * 60);
//
//console.log(jours2 + " jours + " + heures2 + " heures + " + minutes2 + " minutes convertis en secondes est égale à " + calculeSecondes2 + " secondes.");
//
//
//if (calculeSecondes < calculeSecondes2) {
//    console.log("La difference entre " + calculeSecondes + " secondes et " + calculeSecondes2 + " secondes est de " +
//        (calculeSecondes2 - calculeSecondes) + " secondes.");
//}
//
//else {
//    console.log("La difference entre " + calculeSecondes2 + " secondes et " + calculeSecondes + " secondes est de " +
//        (calculeSecondes - calculeSecondes2) + " secondes.");
//}


//______________ ____Fin exos 3 et 4____ ______________



$(function () {


    $("#tirage").click(function () {
        
        let arrayBalls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        function randomNumber(arrayBalls) {

            return items[Math.floor(Math.random() * items.length)];

        }

        const items = [254, 45, 212, 365, 2543];
        console.log(random_item(items));


    });




})









//









//
