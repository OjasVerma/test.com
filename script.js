function login(){
    var a  = document.getElementById("name").value;
    console.log(a)
    a == JSON.stringify()
    name_list = [a]
    var b  = document.getElementById("mail").value;
    console.log(b)
    b == JSON.stringify()
    mail_list = [b]
    let jsonObj = {
        name : a,
        mail : b,
    }
    let myjsonStr = JSON.stringify(jsonObj)
    alert(myjsonStr)
}
