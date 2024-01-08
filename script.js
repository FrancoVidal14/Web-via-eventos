document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        let header = document.querySelector('header');
        let liHeader = document.querySelectorAll('li');
        let scrollY = window.scrollY;
    
        if (scrollY > 400) {
            header.style.backgroundColor = '#c9b977';
            liHeader.forEach(function(item){
                item.style.color = 'black';
        });
        } else {
            header.style.backgroundColor = 'transparent';
            liHeader.forEach(function(item){
                item.style.color = 'white';
        });
        }
    
        if(scrollY > 650) {
            header.style.borderBottom = '2px solid gold'; 
        }
        else{
            header.style.border = 'none';
        }
    });
});
