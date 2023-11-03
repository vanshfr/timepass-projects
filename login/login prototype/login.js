const msg = "Invalid username or password !!";
const msg1 = "Welcome Mr. Vansh ";

document.getElementById("btn").onclick = function () {
    let a = document.getElementById("uname").value;
    console.log(a);
    let b = document.getElementById("pwd").value;
    console.log(b);
    if (a == "vansh" && b == 123) {
        document.getElementById("inv").innerHTML = msg1;
    }
    else {
        document.getElementById("inv").innerHTML = msg;
    }
}