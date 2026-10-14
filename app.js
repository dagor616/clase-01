console.log("El archivo app.js se cargó correctamente");

const nombre = "tun tun tun";
const apellido = "sahur";
const edad = 67;
const ciudad = "Lima";

console.log(`me llamo  ${nombre} ${apellido}, y tengo unos ${edad} añitos uwu, vivo en ${ciudad} y soy un pe causa`);
typeof nombre;
typeof apellido;
typeof edad;
typeof ciudad;

const añoActual = 2026;
const añoNacimiento = añoActual - edad;


console.log(`mi edad actual es ${añoNacimiento}.`);

const edadTexto = "19";
console.log(edadTexto + 1);

const edadNumero = Number(edadTexto);
console.log(Number(edadNumero + 1));

//los comentarios de porque los resultado sson distintos es que en el primer caso como javascript es un meme(palabras del instructor alejandro).Cuando se va a sumar lo cuenta como si fuera otro digito y se encagetea(encageta).mientras que si se declara con number la variable si lo toma como numero y no como texto, haciendo esto que se sumen correctamente.//