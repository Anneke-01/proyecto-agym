const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Animate links
        navLinks.forEach((link, index) => {
            //console.log(index);
            //link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            // console.log(index/7);
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation

        burger.classList.toggle('toggle');
    });

    

}

navSlide();