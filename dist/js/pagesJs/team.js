document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".ministry-nav a"),c=document.querySelectorAll(".ministry-section");e.forEach(t=>{t.addEventListener("click",function(t){t.preventDefault(),e.forEach(t=>t.classList.remove("active")),c.forEach(t=>t.classList.remove("active")),this.classList.add("active");t=this.getAttribute("data-ministry");document.getElementById(t).classList.add("active")})})});