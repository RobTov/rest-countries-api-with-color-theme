import api from "../helpers/api_endpoints.js";
import { ajax } from "../helpers/ajax.js";
import { Card } from "../components/Card.js";
import { CountryDetail } from "./CountryDetail.js";

export  async function Router() {
    let { hash } = location;

    const $main = document.querySelector("main"), 
        $card_section = document.querySelector(".grid-fluid"),
        $loader = document.querySelector(".loader");

    if (!hash || hash === "#/") {
        await ajax({
            url: api.ALL,
            cbSuccess: data => {
                let html = "";
                data.forEach(el => {
                    html += Card(el);
                });
                document.querySelector(".grid-fluid").innerHTML += html;
            }
        });
    }
    
    else if (hash.includes("#/search")) {
        
        let searchURL = `${api.NAME}${localStorage.getItem("country-search")}`;
        await ajax({
            url: searchURL,
            cbSuccess: data => {
                let html = "";
                if (!data) {
                    console.log("No results found")
                } else {
                    data.forEach(el =>  {
                        html += Card(el);
                    });
                    $card_section.innerHTML += html;
                }
            }
        })
    } else if (hash.includes("#/region")) {
        let filterURL = `${api.REGION}${localStorage.getItem("region")}`;

        await ajax({
            url: filterURL,
            cbSuccess: data => {
                let html = "";
                data.forEach(el => {
                    html += Card(el);
                });
                $card_section.innerHTML += html;
            }
        })
    } else {
        $main.innerHTML = "";

        let countryDetailURL = `${api.CODE}${localStorage.getItem("cca2")}`;
        await ajax({
            url: countryDetailURL,
            cbSuccess: data => {
                $main.innerHTML = CountryDetail(data[0]);
            }
        })
    }
    
    document.addEventListener("click", e => {
        if (!e.target.matches(".v-detail")) return false;

        localStorage.setItem("cca2", e.target.dataset.cca2);
    })


    $loader.style.display = "none";
}