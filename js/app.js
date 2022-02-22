
const tabMenu = document.querySelectorAll(".menu")
const Sqcontent = document.querySelectorAll(".tab-content")



tabMenu.forEach((item) => {

    item.addEventListener("click", function(){

    
    
        tabMenu.forEach(item=>{
            
            item.classList.remove("active")
        
        })
        Sqcontent.forEach((item)=>{
            item.classList.remove("active")
            
        })
       
        item.classList.add("active")
        
        let temp = document.querySelector(this.getAttribute("href"))
        temp.classList.add("active")
    })


});

