"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//MÉTODO XMLHTTPREQUEST -----------------------------------------------------------
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}}`);
    request.send();

    request.addEventListener("load", () => {
        const [dados] = JSON.parse(request.responseText);
        console.log(dados);

        const html = `
        <article class="country">
            <img class="country__img" src="${dados.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${dados.name.common}</h3>
                <h4 class="country__region">${dados.region}</h4>
                <p class="country__row"><span>👫</span>${(
                    +dados.population / 1000000
                ).toFixed(1)}M people</p>
            </div>
        </article>`;
        countriesContainer.insertAdjacentHTML("beforeend", html);
        countriesContainer.style.opacity = 1;
    });
};

getCountryData("denmark");
getCountryData("norway");
getCountryData("sweden");
