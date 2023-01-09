let InputEmail = document.querySelector('.input-email')
let InputNewPassword = document.querySelector('.input-new_password')

InputEmail.addEventListener('keyup',()=>{
    if(InputEmail.value.includes('@') &&  InputEmail.value.includes('.')){
        InputEmail.style.border='2px solid green'
  }else{
    InputEmail.style.border='2px solid red'
  }

})

InputNewPassword.addEventListener('keyup',()=>{
    var input = InputNewPassword.value;

    if(input == input.toUpperCase()){
        InputNewPassword.style.border='2px solid yellow'
    }
    else{
        InputNewPassword.style.border='2px solid yellow'
    }
    if(input.includes('!')||input.includes('@')||input.includes('#')||input.includes('$')||input.includes('%')||input.includes('^')||input.includes('&')||input.includes('*')||input.includes('(')||input.includes(')')||input.includes('_')||input.includes('-')||input.includes('=')||input.includes('+')||input.includes('>')||input.includes('<')||input.includes('/')){
        InputNewPassword.style.border='2px solid green'
    }
    else{
        InputNewPassword.style.border='2px solid red'
    }
})