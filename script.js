document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        let header = document.querySelector('header');
        let liHeader = document.querySelectorAll('li');
        let contratarnosButton = document.querySelector('#contratarnos');
        let logo = document.getElementById('logo');
        let scrollY = window.scrollY;

        console.log('scrollY:', scrollY);
        if (scrollY > 400) {
            console.log('Cambiando estilos y logo');
            contratarnosButton.classList.remove('contratar');
            contratarnosButton.classList.add('contratarNegro');
            header.style.backgroundColor = '#fff';
            liHeader.forEach(function(item){
                item.style.color = 'black';
            });
            logo.src = "./Imagenes/Logo.png";
        } else {
            contratarnosButton.classList.remove('contratarNegro');
            contratarnosButton.classList.add('contratar');
            header.style.backgroundColor = 'transparent';
            liHeader.forEach(function(item){
                item.style.color = 'white';
            });
            logo.src = "./Imagenes/Logo white.png";
        }

        if(scrollY > 500) {
            console.log('Cambiando borde del header');
            header.style.borderBottom = '2px solid var(--butter)'; 
        }
        else{
            header.style.border = 'none';
        }
    });
    


    let elementoParaEliminar = document.querySelector('header nav');

    function esDispositivoMovil() {
        return window.innerWidth <= 768; // Puedes ajustar este valor según tus necesidades
    }

    function gestionarElementoEnDispositivoMovil() {
        if (elementoParaEliminar) {
            if (esDispositivoMovil()) {
                // Ocultar el elemento en dispositivos móviles
                elementoParaEliminar.style.display = 'none';
            } else {
                // Mostrar el elemento si la pantalla es lo suficientemente grande
                elementoParaEliminar.style.display = 'block';
            }
        }
    }

    // Llamada inicial
    gestionarElementoEnDispositivoMovil();

    // Manejar cambios en el tamaño de la pantalla
    window.addEventListener('resize', gestionarElementoEnDispositivoMovil);
});

