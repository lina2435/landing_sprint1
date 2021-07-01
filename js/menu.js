var menu_abierto = false

function abrir_cerrar_menu() {
    if (menu_abierto) {
        document.getElementById("menu_mobile").style.display = "none";
        // muestro hamburguesa
        // oculto aspa
        menu_abierto = false;
        document.getElementById("menu_icon_burguer").style.display = "block";
        document.getElementById("close_icon").style.display = "none";

    } else {
        document.getElementById("menu_mobile").style.display = "block";
        // muestro aspa
        // oculto hamburguesa
        menu_abierto = true;
        document.getElementById("close_icon").style.display = "block";
        document.getElementById("menu_icon_burguer").style.display = "none";


    }

}