var contadorCartasGiradas = 0;
var imagenesCreadas = 0;
var cont1 = 0;
var cont2 = 0;
var img1;
var img2;
var c1;
var c2;
var numeros = [];
var contadorClicks=0;

var imagenes = [
    "./img/blaze.jpeg",
    "./img/bookshelf.jpeg",
    "./img/brick.jpeg",
    "./img/coal_ore.jpeg",
    "./img/cobblestone.jpg",
    "./img/crafting_table.jpeg",
    "./img/diamond_ore.jpeg",
    "./img/dirt_block.jpeg",
    "./img/furnace_off.jpeg",
    "./img/furnace_on.jpeg",
    "./img/glowstone.jpeg",
    "./img/gold_ore.jpeg",
    "./img/grass_block.jpeg",
    "./img/iron_ore.jpeg",
    "./img/jack_o_lantern.jpeg",
    "./img/lava.jpeg",
    "./img/obsidian.jpeg",
    "./img/pig.jpeg",
    "./img/pigman.jpeg",
    "./img/pumpkin.jpeg",
    "./img/sheep.jpeg",
    "./img/skeleton.jpeg",
    "./img/slime.jpeg",
    "./img/spider.jpeg",
    "./img/steve.jpeg",
    "./img/stone.jpeg",
    "./img/tnt.jpeg",
    "./img/villager.jpeg",
    "./img/water.jpeg",
    "./img/wither_head.jpeg",
    "./img/zombie.jpeg",
    "./img/magmacube.jpeg"
];
var vector = [];
var contador = 0;

function girarImagen(imagen) {
    contadorClicks+=1;
    var campo = document.getElementById("formulario");
    var valor = campo.value;
    var long = valor * valor;
    console.log("tiradas" + contadorCartasGiradas + "totalcartas" + total);
    if (contadorCartasGiradas == (total - 1)) {
        imagen.onclick = function () { };
        if (long & 2 != 0) {
            if (contadorCartasGiradas == long - 1) {
                alert("HAS GANADO FELICIDADES! \n Has hecho un total de " + contadorClicks + " Clicks");
            }
        }
    }
    var seccion = document.getElementById("seccion");
    var fila = imagen.parentNode;
    var numfilas = seccion.children.length;
    var numColumnas = fila.children.length;
    var num = Array.from(seccion.children).indexOf(fila) * numColumnas + Array.from(fila.children).indexOf(imagen);
    var iguales = false;
    var origen = "./img/backCard.jpeg";
    var input = document.getElementById("formulario");
    valor = input.value;
    total = valor * valor;
    console.log(imagen);
    cont1++;
    if (cont1 == 1) {
        c1 = numeros[num];
        console.log(c1);
        cont2++;
        img1 = imagen;
        img1.src = vector[c1]
    }
    if (cont1 == 2) {
        c2 = numeros[num];
        console.log(c2);
        cont2++;
        img2 = imagen;
        img2.src = vector[c2];
        console.log(img2.src);
        iguales = sonIguales(c1, c2);
        if (iguales == false || img1 == img2) {
            setTimeout(function () {
                c1 = origen;
                c2 = origen;
                img1.src = c1; img2.src = c2
            }, 350)
            cont2 = cont2 - 2;
        }
        else {
            img1.onclick = function () { };
            img2.onclick = function () { };
            contadorCartasGiradas += 2;
        }
        cont1 = 0;
    }
    if (long % 2 == 0) {
        if (contadorCartasGiradas == long) {
            alert("HAS GANADO FELICIDADES! \n Has hecho un total de " + contadorClicks + " Clicks");
        }
    }    

}


function sonIguales(c1, c2) {
    var carta = false;
    if (c1 == c2) {
        carta = true;
    }
    else { carta = false; }
    return carta;
}
