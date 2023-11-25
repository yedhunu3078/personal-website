function validate (){

var name=document.signupform.name.value;
var email=document.signupform.name.value;
var password=document.signupform.name.value;

if(name==""){

    alert("please povide name");
    document.signupform.name.focus();
    return false;
}

if(name==""){

    alert("please povide email");
    document.signupform.email.focus();
    return false;
}

if(name==""){

    alert("please povide password");
    document.signupform.password.focus();
    return false;
}

return true;

}