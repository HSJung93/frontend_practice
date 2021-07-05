// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", function(){
//     var jsonobj = JSON.parse(this.responseText);
//     var fruit = jsonobj.favorites[1];
//     var outside = document.querySelector(".outside");
//     outside.innerHTML += "<span>"+ fruit + "</span>"
// }); 

// oReq.open("GET", "./json.txt");
// oReq.send();

var count = 0; 
var el = document.querySelector(".outside");
el.style.top = "0px";

// function run() {
//     if(count > 30) return;
//     count = count + 1;
//     el.style.top = parseInt(el.style.top) + count + "px";
//     requestAnimationFrame(run);
// }
// requestAnimationFrame(run);

var target = document.querySelector(".outside");
var btn = document.querySelector("button");
btn.addEventListener("click", function() {
    var pre = parseInt(target.style.left);
    target.style.left = pre + 100 + "px"; 
});