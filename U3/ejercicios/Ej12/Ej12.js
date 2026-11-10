function abrirPopup() {
    let ancho = 600;
    let alto = 400;
    let izquierda = (screen.width - ancho) / 2;
    let arriba = (screen.height - alto) / 2;

    window.open(
        "https://www.google.com",
        "popup",
        "width=" + ancho + ",height=" + alto + ",left=" + izquierda + ",top=" + arriba
    );
}