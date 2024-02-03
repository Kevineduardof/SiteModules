import journal from "./Jornals.js";

let arrayJournal =
[
    {
       date: "MAY 28, 2017", 
       title: "An Unforgettable", 
       description: "If you only have one day to visit Yosemite National Park and you want to make the most out of it.", 
       image: "https://img.freepik.com/fotos-premium/homem-na-floresta-olhando-para-o-horizonte_79390-1414.jpg" 
    },

    {
       date: "MAY 30, 2017", 
       title: "Symphonies in Steel", 
       description: "Crossing the dgolden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground.", 
       image: "https://www.visiteosusa.com.br/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-05/23b0b0b9caaa07ee409b693da9bf9003.jpeg?h=999fdb2a&itok=NI7EBwBG" 
    }
];

export default function tJournal() {
    const container = document.createElement("section");
    container.classList.add("TheJournal");

    const title = document.createElement("h1");
    title.innerText = "The Journal";
    container.appendChild(title);

    const subtitle = document.createElement("p");
    subtitle.innerText = "Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences";
    container.appendChild(subtitle);
    
    const divCardsJ = document.createElement("div");
    divCardsJ.classList.add("divCardsJ");
    container.appendChild(divCardsJ);

    const link = document.createElement("a");
    link.innerText = "ALL POSTS >";
    container.appendChild(link);

    arrayJournal.forEach(function(item){
        divCardsJ.appendChild(journal(item.date, item.title, item.description, item.image))
    })

    return container;

};