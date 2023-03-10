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
        error.style.scale = 0
        error.style.opacity = 0
        container.style.height = '100px'
        for(let i=0; i<value.length; i++){
            if (str[i] == "0" || str[i] == "1") {
                container.style.height = '410px'
            }
        }
    }
})

