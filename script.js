let accordians = document.querySelectorAll('.accordian');

for(let i =0; i< accordians.length; i++){
    accordians[i].onclick = function () {
        this.classList.toggle('is-open');
        let content = this.nextElementSibling

        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + 'px';
        }

    }
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation =''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
        //burguy animation
        burger.classList.toggle('toggle')
    })



}

navSlide();


