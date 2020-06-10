// RESPONDIVE NAV MENU
const navMenu = () =>{
    const navbarToggler = document.querySelector('.navbar-toggler')
    const nav = document.querySelector('.nav-list')

    navbarToggler.addEventListener('click',() =>{
        nav.classList.toggle('nav-active')
        navbarToggler.classList.toggle('toggle')
    })
};

navMenu(); //yuk, metodu calistir

// SERVICES SLIDER
const servicesChange = () =>{
    let firstChild,lastChild; //degiskenlerin daha sonra degisebileceginden let dedik
    const arrowLeft = document.querySelector('#arrow-left');
    const arrowRight = document.querySelector('#arrow-right');
    const servercesAll = document.querySelector('#services-slider');

    document.addEventListener('click',() =>{
        if(event.target === arrowLeft){
            lastChild = servicesAll.lastElementChild;
            servicesAll.insertAdjacentElement('afterbegin',lastChild)
        }
        else if(event.target === arrowRight){
            firstChild = servicesAll.firstElementChild;
            servicesAll.insertAdjacentElement('beforeend',firstChild)
        }
    })
}

servicesChange();




// SCROLL REVEAL ANIMATION

ScrollReveal().reveal('.ani-left',{ //burda class olusturduk bunu ise html de ekliycez soldan gelen animasyonlar icin
    origin: 'left', //animasyonun basladigi yer
    distance:'10rem', // animasyon uzunlugu
    duration: 1000, //1 saniye
    easing: 'ease-in'
}); 

ScrollReveal().reveal('.ani-right',{
    origin: 'right', //animasyonun yukaridan baslar cunku css clasini rotate ettigmizden yoksa sagladan geliyor
    distance:'10rem', // animasyon uzunlugu
    duration: 1000, //1 saniye
    easing: 'ease-in'
}); 
// once gozukmuyor daha sonra ortaya cikiyor
ScrollReveal().reveal('.ani-fade-up',{
  opacity: 0,
  easing: 'ease-in'
}); 

ScrollReveal().reveal('.ani-bottom',{
    origin: 'bottom', //animasyonun basladigi yer
    distance:'10rem', // animasyon uzunlugu
    duration: 1000, //1 saniye
    easing: 'ease-in'
}); 
// burdaki gecikme 1sn sonra bu calisacak
ScrollReveal().reveal('.ani-delay',{
    delay: 500
  });
//  burdaki ise 2sn sonra calisacak
ScrollReveal().reveal('.ani-delay-2',{
    delay: 1000
  });
