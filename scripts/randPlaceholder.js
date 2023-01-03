const tempOraciones = [
    "Christian es un buen amigo de Samuel", "A Germán le gusta jugar con sus amigos",                 "Se encontraron casualmente en la selva ecuatoriana",
    "Es necesario aprender castellano",     "Aquello que para el tiempo en mi reloj de arena",        "Con este saco de dormir se duerme bien en cualquier tipo de situación",
    "Analizar oraciones es divertido",      "La sintaxis es muy importante para entender castellano", "Aquel reo huyó del juzgado, ahora se desconoce su paradero",
    "Mi amiga Clara es buena amiga",        "Manuel es un hombre sabio con un futuro brillante",      "Nuestro alcalde ha inaugurado las fiestas locales con una gran sonrisa",
    "Luisa es la mejor profe de mi insti",  "Me gusta atender en clase cuando explican sintaxis",     "Este cuadro, «Los Girasoles», fue pintado por un magnífico artista",
    "Todas las cosas buenas tienen un fin", "«Don Quijote de La Mancha» se escribió en 1605",         "Todos nos dimos cuenta de lo que pasaba en ese mismo instante",
];
let random = Math.floor(Math.random() * tempOraciones.length);
document.getElementById("f_oracion").placeholder = `${tempOraciones[random]}.`;