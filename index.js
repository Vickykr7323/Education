// change style of scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle ('window-scroll',window.scrollY > 0)
})

// show/hide faq

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        const icon=faq.querySelector('.faq-icon i');

        if(icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus";
        }
        else{
            icon.className = "fa-solid fa-plus";
        }
    })
})
