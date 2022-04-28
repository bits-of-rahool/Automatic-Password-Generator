let Pas1=document.getElementById("pas1")
let Pas2=document.getElementById("pas2")
let Pas3=document.getElementById("pas3")
let Pas4=document.getElementById("pas4")

function generate(){
    Pas1.textContent=random();
    Pas2.textContent=random();
    Pas3.textContent=random();
    Pas4.textContent=random();
}
function random(){
    let pharse="";
    let num;
    
    for(let i=0;i<10;i++){
        num=Math.floor(33+Math.random()*90);
        pharse += String.fromCharCode(num);
        console.log(num)
}
    return pharse
}

        
