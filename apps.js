let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    let message = [];
    let pass1 = document.querySelector('.pass1').value;
    let pass2 = document.querySelector('.pass2').value;
    let name = document.querySelector('.name').value;
    if(pass1 != '' || pass2 != '' || name != ''){
        if(pass1==pass2){
           if(pass1.length>=20){
                message.push('your password are longer max 20 digit')
           }
           else if(pass1.length>=6){
                if(name == ''){
                    message.push('Enter your name');
                }
                else{
                    message.push('You are succeesfully login')
                }
           }
           else{
               message.push('Type your password minimun 6 word')
           }
        }
        else{
            message.push('Your password do not mathing');
        }
    }
    else{
        message.push('please enter your password or name')
    }
    let hidenMsg = document.querySelector('.hiden-msg');
    hidenMsg.innerHTML = message[0];
    hidenMsg.style.display = 'block'
})