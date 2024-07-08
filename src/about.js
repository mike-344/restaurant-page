function aboutpage(){
    const content = document.querySelector("#content");
    const wrapper = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "About page";
    wrapper.appendChild(heading);
    const hours = document.createElement("p");
    hours.textContent = `emporibus autem quibusdam et aut officiis debitis aut rerum 
    necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.`;
    wrapper.appendChild(hours);
    content.appendChild(wrapper);
}

export {aboutpage}