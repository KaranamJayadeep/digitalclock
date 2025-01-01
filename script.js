const hour=document.getElementById("hours");
const min=document.getElementById("mins");
const sec=document.getElementById("secs");
const meri=document.getElementById("meri");

function checktime(){
    let hrs=new Date().getHours();
    let mi=new Date().getMinutes();
    let se=new Date().getSeconds();
    let day="AM";
    if(hrs>12){
        hrs=hrs-12;
        day="PM";
    }
    hour.innerHTML=hrs;
    min.innerHTML=mi;
    sec.innerHTML=se;    
    meri.innerHTML=day;
    setTimeout(()=>{
        checktime();
    },1000);
}
checktime();
let rotate=false;
function rotateits() {
    if(rotate){
        sec.style.transform=`rotateX(0deg)`;
    }
    else{
        sec.style.transform=`rotateX(360deg)`;
    }
    rotate=!rotate;
}
setInterval(rotateits, 1000);