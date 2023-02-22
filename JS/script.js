function navbar1() {
    document.getElementById("id1").style.backgroundColor = "rgba(0,0,0,.7)";
}
function validate() {
    let x = document.getElementById("a").value;
    let y = document.getElementById("b").value;
    let xreg = /^[a-zA-Z]{2,15}$/;
    let yreg =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9])+\.[a-zA-Z]{2,}))$/;
    if (x == "") {
        alert("name field is empty");
        return false;
        //
    } else if (!xreg.test(x)) {
        alert("enter a valid name");
        return false;
    } else if (y == "") {
        alert("enter the email id");
        return false;
    } else if (!yreg.test(y)) {
        alert("You have entered an invalid email address!");
        return false;
    }
}
