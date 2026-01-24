let myForm=document.querySelector('form')
console.log(myForm)

myForm.onsubmit=(e)=>{
    e.preventDefault();
    console.log('form submitted')

    let email=document.querySelectorAll('input')[0].value
    let password=document.querySelectorAll('input')[1].value

    console.log(email,password)

    let storedData=JSON.parse(localStorage.getItem('userData'))
    console.log(storedData)

    if(email===storedData.email && password ===storedData.password){
        alert("Login Successfull")
        window.location.href='./HomePage.html'
    }else{
        alert("Invaid User Details")
    }

}