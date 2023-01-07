let user = document.getElementById("user");
let password = document.getElementById("password");
let button = document.getElementById("login")
// moises canaria 
const move = new Audio();
move.src = "haha.mp3"; //Audio de muerte
const Play =() =>{
   move.play();
}
button.onclick = function (){
    if (user.value == "admin" && password.value == "admin"){
        document.getElementById("container").innerHTML = "😂😂😂😂😂😂😂😂"
        Play();
    }
}
