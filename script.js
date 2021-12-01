"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//MÉTODO XMLHTTPREQUEST -----------------------------------------------------------

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/brazil}");
request.send();

request.addEventListener("load", () => {
    console.log(JSON.parse(request.responseText));
});
