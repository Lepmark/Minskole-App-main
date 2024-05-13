let userId = document.getElementById("userId");
let Form1 = document.getElementById("Form1");
let Form2 = document.getElementById("Form2");
let Form3 = document.getElementById("Form3");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2")

 function displayForm2(){
    Form1.style.display = "none";
    Form2.style.display = "block";
    Form3.style.display = "none";
}
function displayForm3(){
    Form1.style.display = "none";
    Form2.style.display = "none";
    Form3.style.display = "block";
}