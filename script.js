
    const hoverBtn = document.querySelector(".bi-caret-down-fill");
    const services = document.querySelector(".services");
    const dropDown = document.querySelector(".dropdown");
    //For debugging purposes
    console.log(hoverBtn);
    console.log(services);
    console.log(dropDown);

   services.addEventListener("mouseover",()=>{
    console.log("The event has been listened!!");
    services.style.transform = "scale(1.12)";
    hoverBtn.classList.remove("bi-caret-down-fill");
    hoverBtn.classList.add("bi-caret-up-fill");
    dropDown.style.display ="block";
   })

services.addEventListener("mouseout",()=>{
    console.log("The mouse has been removed");services.style.transform = "scale(1)";
    hoverBtn.classList.add("bi-caret-down-fill")
    hoverBtn.classList.remove("bi-caret-up-fill");
})

dropDown.addEventListener("mouseover",()=>{
    dropDown.style.display="block";
});

dropDown.addEventListener("mouseout",()=>{
    dropDown.style.display="none"
})