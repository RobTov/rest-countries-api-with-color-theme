import { numberFormat } from "../helpers/number_format.js";

export function Card(props) {
    let { name, flags, population, region, cca2} = props,
        capital = props.capital || "No capital",
        forPopulation = numberFormat(population);

    // document.addEventListener("click", e => {
    //     if (!e.target.matches("#detail")) return false;
    //     localStorage.setItem("cca2", e.target.dataset.cca2);
        
    // });

    return `
        <figure class="card" data-el>
            <a href="#/${cca2}">
                <img class="v-detail" src="${flags.svg}" alt="${name.common}" data-cca2="${cca2}">
            </a>
            <div class="card-info">
                <a href="#/${cca2}" data-cca2="${cca2}">
                    <h4 class="v-detail" data-cca2="${cca2}">${name.common}</h4>
                </a>
                <p><span class="info">Population: </span>${forPopulation}</p>
                <p><span class="info">Region: </span>${region}</p>
                <p><span class="info">Capital: </span>${capital[0]}</p>
            </div>
        </figure>
    `;
}