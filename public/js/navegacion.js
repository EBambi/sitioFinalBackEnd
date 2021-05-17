window.onload = init;
var secciones = [];
var rutas = ["/", "/about", "/gallery", "/gallery2", "/gallery3","/contact","/services", "/login"];
var bajo_logueo =["/contact"];
var permiso = true;

function init(){
    asignarSecciones();
    asignarRutas();
}

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
    controlAcceso(id);
    if(permiso == true){
        location.href=id;
    }
    else{
        alert("Para ingresar a esta sección debe registrarse e iniciar sesión primero");
    }
    permiso = true;
    
}

function controlAcceso(indice){
    for (var i in bajo_logueo){
       if (bajo_logueo[i] == indice){
           permiso = false;
       }
    }
}