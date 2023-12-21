

let nav = document.querySelector("nav")

window.onscroll = function(){
  if(window.scrollY>0){
    nav.style.backgroundColor = "#fff"
  }
  else{
    nav.style.backgroundColor = "transparent"
  }
  }


  let menuIcon = document.querySelector("#menuIcon");
  let navList = document.querySelector("#nav-list")

  menuIcon.addEventListener("click",()=>{
   navList.classList.toggle("show-list")

  })
let theme =  document.querySelector("#theme")
 theme.addEventListener("click",()=>{
      document.body.classList.toggle("darkTheme");
      if(document.body.classList.contains("darkTheme")){
        
     theme.classList.remove("ri-moon-fill")
     theme.classList.add("ri-sun-fill")
     
      }
      else{
        theme.classList.remove("ri-sun-fill")
        theme.classList.add("ri-moon-fill")
       
      }
  })