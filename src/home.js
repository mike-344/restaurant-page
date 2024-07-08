function homepage(){
    const content = document.querySelector("#content");
    const wrapper = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "The Restaurant Homepage";
    const hours = document.createElement("p");
    hours.textContent = `dicta sunt explicabo. 
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
    sed quia consequuntur magni dolores eos qui ration`;
    wrapper.append(heading, hours);
    content.appendChild(wrapper);
}

export {homepage}