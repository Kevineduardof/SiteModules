export default function card(city, country, image) {
    const div = document.createElement('div');
    div.classList.add('card');
    
    const title = document.createElement('h2');
    title.innerText = city;
    div.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.innerText = country;
    div.appendChild(subtitle);

    const img = document.createElement('img');
    img.src = image;
    div.appendChild(img);

    return div;
}