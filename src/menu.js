function menupage(){
    const content = document.querySelector("#content");
    const wrapper = document.createElement("div");
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    wrapper.appendChild(heading);
    const hours = document.createElement("p");
    hours.textContent = `cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
    id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio`;
    wrapper.appendChild(hours);
    content.appendChild(wrapper);
}

export {menupage}

