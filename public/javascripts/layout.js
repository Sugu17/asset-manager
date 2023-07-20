const links=document.getElementsByClassName("nav-link")
for (let value of links){
  value.addEventListener("click",(event)=>{
    const link=event.currentTarget;
    for(let link of links){
      if(link.classList.contains("active"))
        link.classList.remove("active");

      const icon=link.firstElementChild;
      if(icon.classList.contains("visually-hidden")===false){
        icon.classList.add("visually-hidden");
      }
    }
    link.classList.toggle("active")
    link.firstElementChild.classList.toggle("visually-hidden");
  })
}