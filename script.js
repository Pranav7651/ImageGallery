var deer=document.querySelector("#Deer");
var tiger=document.querySelector("#Tiger");
var fox=document.querySelector("#Fox");
var all=document.querySelector("#All");

all.style.backgroundColor="#f886b2";

all.addEventListener("click",()=>{
    all.style.backgroundColor="#f886b2";
    deer.style.backgroundColor="#EFBBCF";
    tiger.style.backgroundColor="#EFBBCF";
    fox.style.backgroundColor="#EFBBCF";

    document.getElementById("img1").style.display="inline";
    document.getElementById("img2").style.display="inline";
    document.getElementById("img3").style.display="inline";
    document.getElementById("img4").style.display="inline";
    document.getElementById("img5").style.display="inline";
    document.getElementById("img6").style.display="inline";
    document.getElementById("img7").style.display="inline";
    document.getElementById("img8").style.display="inline";
    document.getElementById("img9").style.display="inline";

})

deer.addEventListener("click",()=>{
    deer.style.backgroundColor="#f886b2";
    all.style.backgroundColor="#EFBBCF";
    tiger.style.backgroundColor="#EFBBCF";
    fox.style.backgroundColor="#EFBBCF";

    document.getElementById("img1").style.display="inline";
    document.getElementById("img3").style.display="inline";
    document.getElementById("img6").style.display="inline";
    document.getElementById("img9").style.display="inline";

    document.getElementById("img2").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img7").style.display="none";
    document.getElementById("img8").style.display="none";
})

document.querySelector("#Tiger").addEventListener("click",()=>{
    tiger.style.backgroundColor="#f886b2";
    all.style.backgroundColor="#EFBBCF";
    deer.style.backgroundColor="#EFBBCF";
    fox.style.backgroundColor="#EFBBCF";

    document.getElementById("img5").style.display="inline";
    document.getElementById("img7").style.display="inline";

    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img8").style.display="none";
    document.getElementById("img9").style.display="none";
})

document.querySelector("#Fox").addEventListener("click",()=>{
    tiger.style.backgroundColor="#EFBBCF";
    all.style.backgroundColor="#EFBBCF";
    fox.style.backgroundColor="#EFBBCF";
    fox.style.backgroundColor="#f886b2";

    document.getElementById("img2").style.display="inline";
    document.getElementById("img4").style.display="inline";
    document.getElementById("img8").style.display="inline";

    document.getElementById("img1").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="none";
    document.getElementById("img9").style.display="none";
})