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