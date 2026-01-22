
let myForm = document.querySelector('form')
console.log(myForm)

myForm.onsubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted")

    //! Targeting all input field at once
    let inputBox = document.querySelectorAll('input')
    console.log(inputBox)

    let formData = {};
    //! printing individual input field
    inputBox.forEach((input) => {
        // console.log(input.value)

        //! Storing Data in name and value pair
        if (input.type === 'radio') {
            if (input.checked) {
                formData[input.name] = input.value;
            }
        } else {
            formData[input.name] = input.value;
        }
    })
    console.log(formData)

    //! Storing userData in local storage in JSON Format

    localStorage.setItem('userData',JSON.stringify(formData))
    alert("User Register Successfully")

    //! Rendering to login page after successfull registeration
    window.location.href='./Login.html'
}