document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        let header = document.querySelector('header');
        let liHeader = document.querySelectorAll('li');
        let contratarButton = document.querySelector('.contratar')
        let logo = document.getElementById('logo')
        let scrollY = window.scrollY;

        console.log('scrollY:', scrollY);
        if (scrollY > 400) {
            console.log('Cambiando estilos y logo');
            contratarButton.classList.add('contratarNegro');
            header.style.backgroundColor = '#fff';
            liHeader.forEach(function(item){
                item.style.color = 'black';
            });
            logo.src = "./Imagenes/Logo.png";
        } else {
            contratarButton.classList.remove('contratarNegro');
            header.style.backgroundColor = 'transparent';
            liHeader.forEach(function(item){
                item.style.color = 'white';
            });
            logo.src = "./Imagenes/Logo white.png";
        }

        if(scrollY > 500) {
            header.style.borderBottom = '2px solid var(--butter)'; 
        }
        else{
            header.style.border = 'none';
        }
    });
});
