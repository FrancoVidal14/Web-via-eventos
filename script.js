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

        if(scrollY > 450) {
            console.log('Cambiando borde del header');
            header.style.borderBottom = '2px solid var(--butter)'; 
        }
        else{
            header.style.border = 'none';
        }
    });
    


    let elementoParaEliminar = document.querySelector('header nav');
    let scrollDown1 = document.querySelector('#flecha1')
    let scrollDown2 = document.querySelector('#flecha2')  

    function esDispositivoMovil() {
        return window.innerWidth <= 768; // Puedes ajustar este valor según tus necesidades
    }
    
    

    function gestionarElementoEnDispositivoMovil() {
        if (elementoParaEliminar) {
            if (esDispositivoMovil()) {
                elementoParaEliminar.style.display = 'none';
                scrollDown1.style.borderColor = 'antiquewhite';
                scrollDown2.style.borderColor = 'antiquewhite';
                console.log("Cambio de color el scroll")
            } else {
                elementoParaEliminar.style.display = 'block';
                scrollDown1.style.borderColor = 'var(--charcoal)';
                scrollDown2.style.borderColor = 'var(--charcoal)';
                console.log("Cambio de color el scroll")
            }
        }
    }


    gestionarElementoEnDispositivoMovil();

    // Manejar cambios en el tamaño de la pantalla
    window.addEventListener('resize', gestionarElementoEnDispositivoMovil);
});

