import { getWalkers, getCities } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("walker")) {
            const [,cityId] = event.target.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(cityId)) {
                    let foundCity = cities.find(city => city.id === walker.cityId)
                    window.alert(`${walker.name} services ${foundCity.name}.`)
                };
            };
        };
    }
);



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>";

    return walkerHTML;

};

