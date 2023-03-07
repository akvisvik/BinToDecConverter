const container = document.querySelector('.container')
const text = document.querySelector('.text-box button')
const valueBox = document.querySelector('.value-box')
const error = document.querySelector('.not-valid')

text.addEventListener('click', () =>{
    const value = document.querySelector('.text-box input').value;

    if(isNaN(value)){
        container.style.height = '210px'
        valueBox.style.display = 'none'
        error.style.scale = 1
        error.style.opacity = 1
        error.classList.add('fadeIn')
        return;
    }else{
        container.style.height = '105px'
    }
})