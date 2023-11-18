const form =document.querySelector('#form-box');
const usernameInput =document.querySelector('#username');
const emailInput =document.querySelector('#email');
const passwordInput=document.querySelector('#password');
const con_password =document.querySelector('#con_password');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validateForm(); 

    if(isFormValid()==true){
        form.submit();
    }else {event.preventDefault()}
});

function isFormValid(){
    const inputContainers=form.querySelectorAll('.input-fields');
    let result =true;
    inputContainers.forEach((container)=>{ if(container.classList.contains('error'))
    {
        result = false;
    }
});
}
function validateForm(){
    //USERNAME SECTION
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'PLEASE FILL OUT THIS FIELD');
    } else if(usernameInput.value.trim().lenght < 4 || usernameInput.value.trim().lenght > 20){
        setError(usernameInput, 'min 4 max 20');
    }else{
        setSuccess(usernameInput);
    }
    //EMAIL SECTION
    if(emailInput.value.trim()==''){
        setError(emailInput, 'PLEASE PROVIDE EMAIL ADDRESS');
    }else if (isEmailValid(emailInput.value)) {
        setError(emailInput,'PROVIDE VALID EMAIL ADDRESS');
    }else{
        setSuccess(emailInput);
    }
    //PASSWORD SECTION
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'PLEASE FILL OUT THIS FIELD');
    } else if(passwordInput.value.trim().lenght < 4 || passwordInput.value.trim().lenght > 20){
        setError(passwordInput, 'min 4 max 20');
    }else{
        setSuccess(passwordInput);
    }
    //CON_PASSWORD SECTION
    if(con_password.value.trim()==''){
        setError(con_password, 'PLEASE FILL OUT THIS FIELD');
    }else if(passwordInput.value!== passwordInput.value){
        setError(con_password,'password does not match');
    }else{
        setSuccess(con_password);
    }
}

function setError(element, errorMessage){
  const parent = element.parentElement;
  if(parent.classList.contains('success')){
    parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph =parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
      parent.classList.remove('error');
}
parent.classList.add('success');
}

function isEmailValid(email){
    const reg = (/ ^[a-z0-9_\\+-]+(\\.[a-z0-9_\\+-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*\\.([a-z]{2,4})$/);
    return reg.test(email);
}
