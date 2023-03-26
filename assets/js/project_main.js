const linkColor = document.querySelectorAll('.nav__link');

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active-link'));
    this.classList.add('active-link');
}

linkColor.forEach(l => l.addEventListener('click',colorLink));


// show hidden menu

const showMenu = (toggleId, navbarId) => {
    const toggle =document.getElementById(toggleId),
        navbar= document.getElementById(navbarId);
    if(toggle && navbar){
        toggle.addEventListener('click', () =>{
            // show menu
            navbar.classList.toggle('show-menu')

            //rotate toggle
            toggle.classList.toggle('rotate-icon')


        })
    }
}
showMenu('nav-toggle','nav')