import navElement from "./header.js";
import outdoor from "./outdoor.js";
import etworld from "./EtWorld/EtWorld.js";
import tJournal from "./Journals/TheJournal.js";
import footer from "./footer.js";

export default function page(){
    const main = document.createElement("main")

    main.appendChild(navElement());
    main.appendChild(outdoor());
    main.appendChild(etworld());
    main.appendChild(tJournal());
    main.append(footer());

    return main;
}