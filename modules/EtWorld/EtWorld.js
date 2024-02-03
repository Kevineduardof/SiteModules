import card from "./card.js";

let exploreWorld = 
[
    {
       city: "Paris", 
       country: "França",
       image: "https://s1.static.brasilescola.uol.com.br/be/2023/03/torre-eiffel.jpg"
    },

    {
       city: "Rio de Janeiro", 
       country: "Brasil",
       image: "https://cdn.culturagenial.com/imagens/cristo-redentor.jpg"
    },

    {
       city: "Tóquio", 
       country: "Japão",
       image: "https://ideiasnamala.files.wordpress.com/2011/09/dscn4645.jpg"
    }
];


export default function etworld(){
   const container = document.createElement("section");
   container.classList.add("etw")

   const title = document.createElement("h1");
   title.innerText = "Explore the World";
   container.appendChild(title);
   
   const subtitle = document.createElement("p");
   subtitle.innerText = "We seek to provide the most authentic content from athletes, adventurers, explorers and travellers around the world. Our long-term mission is to educate, inspire and enable all peoples to experience & protect wilderness."
   container.appendChild(subtitle);

   const divCard = document.createElement("div");
   divCard.classList.add("cards");
   container.appendChild(divCard);

   const link = document.createElement("a");
   link.innerText = "SEE MORE>>"
   link.href = "#"
   container.appendChild(link)

   exploreWorld.forEach(function(item){
      divCard.appendChild(card(item.city, item.country, item.image))
   })
   
   return container;
}


