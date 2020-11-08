const form = document.getElementById('form');
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("emailaddress");
const password =document.getElementById("password");





//  event listner to listen submit event on form submit


form.addEventListener('submit', (e) => {
    e.preventDefault();

  
    if(checkInput()){
        form.submit();
    }
    
})



//  TODO:  check for regular expression
//  this function is used to check all the input right now it is checking only empty field need to update it for regular expression also and password match also etch
const checkInput = () =>{
    const userFirstName = firstName.value.trim();
    const userLastName = lastName.value.trim();
    const userEmail = email.value.trim();
    const userpassword = password.value.trim();

    // console.log(userFirstName);


    // to check first name
    if(userFirstName === ''){
        setErrorFor(firstName,"Please enter your first name");
        return false;
    }
    else{
        setSuccessFor(firstName);
    }
  //  to check last name
  if(userLastName === ''){
    setErrorFor(lastName,"Please enter your last name");
    return false;
    }
    else{
        setSuccessFor(lastName);
    }
    // to check email 
    if(userEmail === ''){
        setErrorFor(email,"Please enter your email");
        return false;
        }
        else{
            setSuccessFor(email);
        }
    // to check password
    if(userpassword === ''){
        setErrorFor(password,"please enter your password");
        return false;
    }
    else{
        setSuccessFor(password);
    }



    // fucntion return true if all the fields are tested and correct so the form can be submitted
    return true;

}


// below function is used to set the error message and icon
const setErrorFor = (input,message) =>{

    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.classList.add("error");
    formControl.classList.remove("right");
    small.innerText = message;
    
}

// below function is used to set success icon
const setSuccessFor =(input) => {
    const formControl =input.parentElement;
    formControl.classList.remove("error");
    formControl.classList.add("right");
}
