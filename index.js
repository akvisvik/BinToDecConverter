const container = document.querySelector('.container')
const text = document.querySelector('.text-box button')
const valueBox = document.querySelector('.value-box')
const error = document.querySelector('.not-valid')

text.addEventListener('click', () =>{
    const value = document.querySelector('.text-box input').value;

    if(isNaN(value)){
        triggerError();
    }else{
        error.style.scale = 0
        error.style.opacity = 0
        container.style.height = '100px'

        const binaryValue 0;
        for(let i=0; i<value.length; i++){
            if (value[i] == "0" || value[i] == "1") {
                if(value[i] == "1"){
                    if(i=0){
                        binaryValue = binaryValue + 1;
                    }else{
                        const tmp = 1
                        for(let j=0; j<i; j++){
                            tmp = tmp * 2;
                        }
                        binaryValue += tmp;
                    }
                    console.log(binaryValue);
                }
            }else{
                triggerError();
                break;
            }
        }
        
    }
})

function triggerError() {
    container.style.height = '210px'
    valueBox.style.display = 'none'
    error.style.scale = 1
    error.style.opacity = 1
    error.classList.add('fadeIn')
    return;
}

