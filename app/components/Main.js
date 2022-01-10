import { CardList } from "./CardList.js";
import { InteractionsDiv } from "./InteractionsDiv.js";

export function Main() {
    const $main = document.createElement("main");
    $main.appendChild(InteractionsDiv());
    $main.appendChild(CardList());
    
    return $main;
}