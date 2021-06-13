function toggleSection() {
    var textoOculto = document.getElementById("textoOculto");
    if (textoOculto.style.display === "block") {
        textoOculto.style.display = "none";
        document.getElementById("readMore").textContent = "Leer más";
    } else {
        textoOculto.style.display = "block";
        document.getElementById("readMore").textContent = "Leer menos";
    }
}


function showCategory(gallery) {
    var mascotasElement = document.getElementById("mascotas");
    var familiaElement = document.getElementById("familia");
    var hobbiesElement = document.getElementById("hobbies");
    var galleryElement = document.getElementById("gallery");


    switch (gallery) {
        case "mascotas":
           familiaElement.style.display = "none";
           hobbiesElement.style.display = "none";
           mascotasElement.style.display = "block";
           galleryElement.style.display = "block";
           break;

        case "familia":
           hobbiesElement.style.display = "none";
           mascotasElement.style.display = "none";
           familiaElement.style.display = "block";
           galleryElement.style.display = "block";
           break;


        case "hobbies":
            mascotasElement.style.display = "none";
            familiaElement.style.display = "none";
            hobbiesElement.style.display = "block";
            galleryElement.style.display = "block";
            break;
        
        case "gallery":
            hobbiesElement.style.display = "block";
            mascotasElement.style.display = "block";
            familiaElement.style.display = "block";
            galleryElement.style.display = "block";


        default:
            break;           

    }

}




//////
