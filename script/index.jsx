/*Control Parte de Formacion*/

let linkFormacion = document.getElementById("linkFormacion");
let formacion = document.getElementById("formacion");
let listaFormacion = document.getElementById("listaFormacion"); 

formacion.addEventListener("click", function(event){
    mostrarDatos(listaFormacion)});
linkFormacion.addEventListener("click", function(event){
    mostrarDatos(listaFormacion)});

console.log(formacion)


/*Control Parte de Experiencia Laboral*/
let linkExperiencia = document.getElementById("linkExperiencia")
let experiencia = document.getElementById("experiencia");
let listaExperiencia = document.getElementById("listaExperiencia");

experiencia.addEventListener("click", function(event){
    mostrarDatos(listaExperiencia);
})
linkExperiencia.addEventListener("click", function(event){
    mostrarDatos(listaExperiencia)});

/*Control Parte de Habilidades*/
let linkHabilidades = document.getElementById("linkHabilidades")
let habilidades = document.getElementById("habilidades");
let listaHabilidades = document.getElementById("listaHabilidades");

habilidades.addEventListener("click", function(event){
    mostrarDatos(listaHabilidades);
})
linkHabilidades.addEventListener("click", function(event){
    mostrarDatos(listaHabilidades)});

/*Control Contacto*/
let linkContacto = document.getElementById("linkContacto")
let contacto = document.getElementById("contacto");
let listaContato = document.getElementById("listaContato");

contacto.addEventListener("click", function(event){
    mostrarDatos(listaContato);
})
linkContacto.addEventListener("click", function(event){
    mostrarDatos(listaContato)});



/*funcion para mostrar los datos de cada lista */
function mostrarDatos(lista){
    
    if(lista.hidden){
        lista.hidden = false;
        lista.parentElement.style.border = "3px solid black";
        lista.parentElement.style.background = "lightgrey";
    } else{
        lista.hidden = true;
        lista.parentElement.style.border = "none"
        lista.parentElement.style.background = "white";
    }
}