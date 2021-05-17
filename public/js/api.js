var resultado;

window.onload = init;

function init() {
    resultado = document.getElementById("resultado");
    asignarSecciones();
    asignarRutas();
    if(resultado){
        traerDatos();
    }
}

function traerDatos (){
    fetch('https://api.randomuser.me/?results=5')
    .then(response => response.json())
    .then(data => pintarDatos(data));
}

function pintarDatos(data){
    var temp;
    var ans = "";
    var datos = data.results

    for(var i in datos){
        temp = datos[i];
        ans += "<div class='usuario'><img class='img-circle' src='"+temp.picture.medium+"' />";
        ans+= "<p>";
        ans+= temp.name.first+" "+temp.name.last;
        ans+= "</p></div>";
    }
    resultado.innerHTML = ans;
}

var secciones = [];
var rutas = ["/", "/about", "/gallery", "/gallery2", "/gallery3","/contact","/services", "/login"];

function asignarSecciones(){
    secciones["/"] = document.getElementById("/");
    secciones["/about"] = document.getElementById("/about");
    secciones["/gallery"] = document.getElementById("/gallery");
    secciones["/gallery2"] = document.getElementById("/gallery2");
    secciones["/gallery3"] = document.getElementById("/gallery3");
    secciones["/contact"] = document.getElementById("/contact");
    secciones["/services"] = document.getElementById("/services");
    secciones["/login"] = document.getElementById("/login");
}

function asignarRutas(){
    for (var i in secciones){
        secciones[i].addEventListener("click",navegacion);
        console.log(secciones[i])
    }
}

function navegacion(event){
    var id = event.target.id;
    console.log(id);
    location.href=id;   
}
