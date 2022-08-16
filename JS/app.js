function changeBG(){
    let navbar = document.getElementById('nav-bar');
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue < 100){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor');
    }
};

window.addEventListener('scroll', changeBG);