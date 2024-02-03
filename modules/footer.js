export default function footer() {
    const div = document.createElement("footer");
    div.classList.add("bgFooter");

    const p = document.createElement("p");
    p.innerText = "© 2017 THE GREAT OUTDOORS All rights reserverd. |";
    div.appendChild(p);

    const nav = document.createElement("nav");
    const list = document.createElement("ul");

    list.appendChild(listElements("ABOUT"));
    list.appendChild(listElements("EXPLORE"));
    list.appendChild(listElements("JOURNAL"));
    list.appendChild(listElements("SEARCH"));

    nav.appendChild(list);

    div.appendChild(nav);
    nav.appendChild(p);
    
    return div;
}

function listElements(text){
    const item = document.createElement("li");
    item.innerText = text;

    return item;
}