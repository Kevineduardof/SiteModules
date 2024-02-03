export default function journal(dateValue, titleValue, descriptionValue, imgSrc) {
    const div = document.createElement("div");
    div.classList.add("cardJ");

    const img = document.createElement("img");
    img.src = imgSrc;
    div.appendChild(img);
    
    const date = document.createElement("p");
    date.id = "dt";
    date.innerText = dateValue;
    div.appendChild(date);

    const title = document.createElement("h2");
    title.innerText = titleValue;
    div.appendChild(title);

    const description = document.createElement("p");
    description.innerText = descriptionValue;
    div.appendChild(description);

    return div;
}
