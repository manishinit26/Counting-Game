const value=document.querySelector(".count");
function increament(){
    let count=parseInt(value.innerText);
    count=count+1;
    value.innerText=count;
}
function decreament(){
    let count=parseInt(value.innerText);
    count=count-1;
    value.innerText=count;
}