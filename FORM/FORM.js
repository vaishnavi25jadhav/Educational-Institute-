function validate(){
//fisrt name
    var regexp1=new RegExp("[^a-z|^A-Z]");
    if(regexp1.test(document.getElementById("txt").value))
    {
    alert("Invalid First Name");
    return false;
    }
//last name
    var regexp1=new RegExp("[^a-z|^A-Z]");
    if(regexp1.test(document.getElementById("lastname").value))
    {
    alert("Invalid Last Name");
    return false;
    }

    var text = document.getElementById("pno").value;
    var regx = /^[6-9]\d{9}$/ ;
    if(!regx.test(text))
        alert("Invalid");
    // else
    //     alert("invalid");
 
        var x=document.myform.email.value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
          alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          return false;  
        }

        var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


}
// function check() {
//     if(document.getElementById('password').value ===
//             document.getElementById('confirm_password').value) {
//         document.getElementById('message').innerHTML = "match";
//     } else {
//         document.getElementById('message').innerHTML = "no match";
//     }
// }
