const cursor = document.querySelector(".cursor");
function Show(link){
    document.getElementById(link).classList.add("show");
    cursor.style.opacity = ".8";
}
function Hide(link){
    document.getElementById(link).classList.remove("show");
    cursor.style.opacity = "1";
}

window.addEventListener("mousemove",(pos)=>{
    cursor.style.top = pos.pageY + "px";
    cursor.style.left = pos.pageX + "px";
    cursor.style.display = (pos.pageY>14 && pos.pageX>14 &&
        pos.pageY<window.innerHeight-14 && pos.pageX<window.innerWidth-14)?"block":"none";
});
window.addEventListener("mousedown",()=>cursor.classList.add("click"));
window.addEventListener("mouseup",()=>cursor.classList.remove("click"));

