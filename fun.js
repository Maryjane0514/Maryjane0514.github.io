function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]);
    else
        return null;
}
function registration()
{
    var fristName =document.getElementById("FIRST NAME").value;
    var lastName =document.getElementById("LAST NAME").value;
    var middleName =document.getElementById("MIDDLE NAME").value;
    var userName =document.getElementById("USERNAME").value;
    var emailAdd =document.getElementById("emailAdd").value;
    var passwd =document.getElementById("passwd").value;
    var confirmPwd =document.getElementById("confirmPwd").value;
    
    if(!fristName)
    {
        alert("fristName eooro");
    }else if(!lastName){
        alert("lastName eooro");
    }else if(!middleName){
        alert("middleName eooro");
    }else if(!userName){
        alert("userName eooro");
    }else if(!emailAdd){
        alert("emailAdd eooro");
    }else if(!passwd){
        alert("passwd eooro");
    }else if(!confirmPwd){
        alert("confirmPwd eooro");
    }else if(passwd!=confirmPwd){
        alert("passwd or confirmPwd eooro")
    }

    setCookie("fristName",fristName);
    setCookie("lastName",lastName);
    setCookie("middleName",middleName);
    setCookie("userName",userName);
    setCookie("emailAdd",emailAdd);
    setCookie("passwd",passwd);
    alert("registration success!");
    window.open("./index.html");

}
function login(){
    var userName =document.getElementById("loginUserName").value;
    var passwd =document.getElementById("loginPasswd").value;
    var oldUserName=getCookie("userName");
    var oldPasswd=getCookie('passwd');
    if(!userName){
        alert("userName error");
    }else if(!passwd){
        alert("passwd error");
    }else if(userName==oldUserName&&passwd==oldPasswd){
        alert("login success");
    }else{
        alert('login error');
        window.open('./reg.html');
    }
}
