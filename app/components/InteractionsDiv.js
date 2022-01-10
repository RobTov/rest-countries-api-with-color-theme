import { RegionSelect } from "./RegionSelect.js";
import { Search } from "./Search.js";

export function InteractionsDiv() {
    const $intDiv = document.createElement("div");
    $intDiv.classList.add("int-div");
    $intDiv.appendChild(Search());
    $intDiv.appendChild(RegionSelect());
    return $intDiv;
}