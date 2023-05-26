let x = 10;
console.log(x.length);
console.log('Tipos primitivos');

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email:'cgil@gmail.com',
    edad: 28,
    idioma: 'Es',
    get lang(){
        return this.idioma.toUpperCase();  //Convierte las minúsculas a mayúsculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ //método o función en JavaScript
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){  //Método o función en javascript
        return this.nombre+''+this.apellido;
    },
    get nombreEdad(){  //Este es el método get
        return this.nombre+' edad: '+ this.edad;
    }
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object();//Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5492618282821';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('cambiamos y eliminamos un error');
persona.apellida = 'Betancud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);

//Distinta formas de imprimir un objeto
//Número 1: la más sencilla: concatenar cada valor de cada propiedad
console.log('Distinta formas de imprimir un objeto: forma1');
console.log(persona.nombre+', '+persona.apellido);

//Número 2: A través del ciclo for in
console.log('Distinta formas de imprimir un objeto: forma2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número 3: La función Object.values()
console.log('Distinta formas de imprimir un objeto: forma3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizaremos el método JSON.stringify
console.log('Distinta formas de imprimir un objeto: forma4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang)

function Persona3(nombre = nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo', 'López', 'lopezl@MediaList.com');  //Constructor
padre.telefono = '23875098236528';  //Una propiedad exclusiva del objeto padre
padre.nombre = 'Luis';  //Modificamos el nombre
console.log(padre);
console.log(padre.nombreCompleto());  //Utilizamos la función
let madre = new Persona3('Laura', 'Contrera', 'contreral@mail.com');
madre.telefono = '75439830029612'
console.log(madre);
console.log(madre.telefono);  //la propiedad aún no está definida
console.log(madre.nombreCompleto())

//Diferentes formas de crear objetos

//caso objeto 1
let miObjeto = new Object();  //Esta es una opción formal
//caso objeto 2
let miObjeto2 = {};  //Esta opción es breve y recomendada

//Caso string 1
let miCadena1 = new String('Hola');  //Sintaxis formal
//Caso string 2
let miCadena2 = 'Hola';  //Esta es la sintáxis simplificada y recomendada

//Caso con números 1
let miNumero = new Number(1);  //Es formal no recomendable
//Caso con números 2
let miNumero2 = 1;  //sintáxis recomendada

//Caso boolean 1
let miBoolean1 = new Boolean(false);  //Formal
//Caso boolean 2
let miBoolean2 = false;  //Sintáxis recomendada

//Caso arreglos 1
let miArreglo1 = new Array();  //Formal
//Caso arreglos 2
let miArreglo2 = [];  //Sintáxis recomendada

//Caso funcion 1
let mifunction = new function(){};  //Todo despues de new es considerado objeto
//Caso function 2
let mifunction2 = function(){};  //Notación simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = '23875098236528'
console.log(padre);
console.log(madre.telefono);
madre.telefono = '75439830029612'
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre:'Juan',
    apellido: 'Pérez',
    nombreCompleto2: function(titulo, telefono){
    return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
       //return this.nombre+''+this.apellido;
    }
}
let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}
console.log(persona4.nombreCompleto2('Lic.','23875098236528' ));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing', '75439830029612'));

//Método Apply
let arreglo = ['Ing.', '23875098236528'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));







