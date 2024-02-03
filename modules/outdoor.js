export default function outdoor() {
    const container = document.createElement("div");
    container.classList.add("outdoor");
    const div = document.createElement("div");
    container.appendChild(div);
    const title = document.createElement("h1");
    const subtitle = document.createElement("p");
    const image = document.createElement("img");

    image.src = "img/play.png"

    title.innerText = "The Great Outdoors"
    subtitle.innerText= "Wander often. Wonder always"

    div.appendChild(title);
    div.appendChild(subtitle);
    div.append(image);

    return container;
}
