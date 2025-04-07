document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value ='';
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value='';
    if(email == 'md.alim1042@gmail.com' && password == 'alim1234'){
         
        window.location.href = 'bank.html';
    }
    else{
        alert('Please Input Right email and Password')
    }
})