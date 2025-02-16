const user = {
    "user" : "admin",
    "pw"   : "admin123"
};
var username = document.getElementById('username');
var pw = document.getElementById('password');
var kirim = document.getElementById('kirim');
kirim.addEventListener('click',() =>{
if(username.value == user.user && pw.value == user.pw){
    alert("Login berhasil");
window.location.href = "index.html";

}else{
   alert("Username atau Password Salah"); 
}
});