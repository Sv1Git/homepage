
class Pict
{
     constructor(i)
    {
       this.i=i;
       console.log(i);
       window.picter;
    }
    asi()
    {
if(this.i==3) {
document.querySelector(".season").style.backgroundImage="url('./image/3.jpg')";
window.picter="url('./image/3.jpg')"
}
if(this.i==2) {
document.querySelector(".season").style.backgroundImage="url('./image/осень2.png')";
window.picter="url('./image/snou.png')"
}
if(this.i==1) {
document.querySelector(".season").style.backgroundImage="url('./image/ded.png')";
window.picter="url('./image/ded.png')"
}
if(this.i==4) {
    document.querySelector(".season").style.backgroundImage="url('./image/sun.png')";
    window.picter="url('./image/sun.png')"
}
if(this.i==5) {
    document.body.style.backgroundColor="white";
}
if(this.i==6) {
    document.body.style.backgroundColor="black";
}

var data;
localStorage.setItem('p',window.picter) ;

    }
}

let seas=document.querySelectorAll(".son");

for (let i=0; i<seas.length; i++){
seas[i].addEventListener("change", kClick);
}

function kClick(e)
{ 
const si=new Pict(e.target.value);
console.log(si);
si.asi();
}


