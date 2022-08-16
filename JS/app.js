function changeBG(){
    let navbar = document.getElementById('nav-bar');
    let scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor');
    }
};

window.addEventListener('scroll', changeBG);

function changeNavColor(){
    let navLink = document.querySelectorAll('.nav-link');
    for(let i = 0; i < navLink.length; i++){
        function changeColor(){
            navLink[i].classList.add('navColor');
        }
        navLink[i].addEventListener('click', changeColor);
    }
};
changeNavColor();