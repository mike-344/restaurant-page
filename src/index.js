console.log("Testing!");

import { homepage } from "./home";
import { aboutpage } from "./about";
import { menupage } from "./menu";

homepage();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const content = document.querySelector("#content");
        while (content.firstChild){
            content.removeChild(content.firstChild);
        }
        if (e.target.getAttribute("class") === "about"){
            aboutpage();
        }
        if (e.target.getAttribute("class") === "menu"){
            menupage();
        }
        if (e.target.getAttribute("class") === "home"){
            homepage();
        }

        
    })
    
})




//use nodelist for buttonds and use foreach with the event listener