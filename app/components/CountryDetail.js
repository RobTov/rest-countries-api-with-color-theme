import api from "../helpers/api_endpoints.js";
import { ajax } from "../helpers/ajax.js";
import { Borders } from "./Borders.js";
import { numberFormat } from "../helpers/number_format.js";

export function CountryDetail(props) {
    let { name, languages, population, region, subregion, tld, currencies, flags } = props,
        borders = props.borders || false,
        capital = props.capital || "None",
        offName = name.nativeName[Object.keys(name.nativeName)[0]].official,
        forPopulation = numberFormat(population),
        currText = "",
        langsText = "";

    Object.values(currencies).forEach(el => {
        currText += `${el.name} `;
    });

    Object.values(languages).forEach(el => {
        langsText += `${el}${Object.values(languages).indexOf(el) !== Object.values(languages).length - 1 ? "," : ""} `;
    });

    if (borders) {
        borders.forEach(async el =>  {
            let countryURL = `${api.CODE}${el}`,
                bordersF = "";
            await ajax({
                url: countryURL,
                cbSuccess: data => {
                    bordersF += Borders(data[0]);
                }
            })
            document.querySelector(".borders-btn").innerHTML += bordersF;
        })

    } 

    return `
        <div class="detail-container">
            <a href="#/" class="back" data-el=""><i class="uil uil-previous"></i>  Back</a>
            <div class="country-detail">
                <img class="d-img" src="${flags.svg}" alt="${name.common}">
                <div class="country-desc">
                    <h2 class="desc-title">${name.official}</h2>
                    <div class="country-sm-desc">
                        <div class="cd-left">
                            <p><span class="info">Native Name: </span>${offName}</p>
                            <p><span class="info">Population: </span>${forPopulation}</p>
                            <p><span class="info">Region: </span>${region}</p>
                            <p><span class="info">Sub Region: </span>${subregion}</p>
                            <p><span class="info">Capital: </span>${capital}</p>
                        </div>
                        <div class="cd-right">
                            <p><span class="info">Top Level Domain: </span>${tld}</p>
                            <p><span class="info">Currencies: </span>${currText}</p>
                            <p><span class="info">Languages: </span>${langsText}</p>
                        </div>
                    </div>
                    <div class="borders">
                        <p class="info">Border Countries: </p>
                        <div class="borders-btn"></div>
                    </div>
                </div>
            </div>
        </div>    
    `
}