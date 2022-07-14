let open = document.getElementById("open");
let close = document.getElementById("close");
let wrapFilter = document.getElementById("wrap-filter");

open.addEventListener("click", function (e, mouseEvent) {
   wrapFilter.className = "";
   this.className = "";
   close.className = "fas fa-times isVisible";
})
close.addEventListener("click", function (e, mouseEvent) {
   wrapFilter.className = "isVisible";
   this.className = "fas fa-times";
   open.className = "fas fa-align-justify isVisible";
})


let down = document.getElementById("down");
let up = document.getElementById("up");
let wrapper = document.getElementById("wrapper");

up.addEventListener("click", function (e, mouseEvent) {
   wrapper.style.display = "block";
   this.style.display = "none";
   down.style.display = "block";

})

down.addEventListener("click", function (e, mouseEvent) {
   wrapper.style.display = "none";
   this.style.display = "none";
   up.style.display = "block";

})

let downPrice = document.getElementById("down-price");
let upPrice = document.getElementById("up-price");
let wrapperPrice = document.getElementById("wrapper-price");

upPrice.addEventListener("click", function (e, mouseEvent) {
   wrapperPrice.style.display = "block";
   this.style.display = "none";
   downPrice.style.display = "block";

})

downPrice.addEventListener("click", function (e, mouseEvent) {
   wrapperPrice.style.display = "none";
   this.style.display = "none";
   upPrice.style.display = "block";

})

let downSize = document.getElementById("down-size");
let upSize = document.getElementById("up-size");
let wrapperSize = document.getElementById("wrapper-size");

upSize.addEventListener("click", function (e, mouseEvent) {
   wrapperSize.style.display = "block";
   this.style.display = "none";
   downSize.style.display = "block";

})

downSize.addEventListener("click", function (e, mouseEvent) {
   wrapperSize.style.display = "none";
   this.style.display = "none";
   upSize.style.display = "block";

})

let downColor = document.getElementById("down-color");
let upColor = document.getElementById("up-color");
let wrapperColor = document.getElementById("wrapper-color");

upColor.addEventListener("click", function (e, mouseEvent) {
   wrapperColor.style.display = "block";
   this.style.display = "none";
   downColor.style.display = "block";

})

downColor.addEventListener("click", function (e, mouseEvent) {
   wrapperColor.style.display = "none";
   this.style.display = "none";
   upColor.style.display = "block";

})

let downLoad = document.getElementById("down-load");
let upLoad = document.getElementById("up-load");
let wrapperLoad = document.getElementById("wrapper-load");

upLoad.addEventListener("click", function (e, mouseEvent) {
   wrapperLoad.style.display = "block";
   this.style.display = "none";
   downLoad.style.display = "block";

})

downLoad.addEventListener("click", function (e, mouseEvent) {
   wrapperLoad.style.display = "none";
   this.style.display = "none";
   upLoad.style.display = "block";

})

let downSport = document.getElementById("down-sport");
let upSport = document.getElementById("up-sport");
let wrapperSport = document.getElementById("wrapper-sport");

upSport.addEventListener("click", function (e, mouseEvent) {
   wrapperSport.style.display = "block";
   this.style.display = "none";
   downSport.style.display = "block";

})

downSport.addEventListener("click", function (e, mouseEvent) {
   wrapperSport.style.display = "none";
   this.style.display = "none";
   upSport.style.display = "block";

})

let downHeight = document.getElementById("down-height");
let upHeight = document.getElementById("up-height");
let wrapperHeight = document.getElementById("wrapper-height");

upHeight.addEventListener("click", function (e, mouseEvent) {
   wrapperHeight.style.display = "block";
   this.style.display = "none";
   downHeight.style.display = "block";

})

downHeight.addEventListener("click", function (e, mouseEvent) {
   wrapperHeight.style.display = "none";
   this.style.display = "none";
   upHeight.style.display = "block";

})



