/*
    Hamburger menu toggle class function
*/ 
document.querySelector('.c-navMenu').addEventListener('click', function(){
    this.classList.toggle('isActive')
})

/*
    Tabs toggle class function
*/ 
document.querySelectorAll('[data-target="tab"]').forEach((el) => {
    el.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelectorAll('.c-tabContent--item').forEach((el) => {
            el.classList.remove('isActive')
        })
        document.querySelector(this.getAttribute('href')).classList.add('isActive')
    })
})