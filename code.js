let btnAfr = document.getElementById("afrique");
let btnAmq = document.getElementById("ameriques");
let btnAsie = document.getElementById("asie");
let btnEur = document.getElementById("europe");
let affichePays = document.querySelector("div")


function showCountryByContinent(continent){
    affichePays.textContent = "" 
    let req = new XMLHttpRequest
    req.open("get", 'https://restcountries.com/v3.1/lang/french');
    req.responseType = 'json';

     req.send();
     req.onload = () => {
         if (req.readyState == XMLHttpRequest.DONE)
             if (req.status == 200) {

                 let world = req.response;
                 console.log(world);
                 for (const countries of world) {
                     if (countries.continents.includes(continent)) {
                             console.log(countries);
                             affichePays.innerHTML += countries.name.common + "<br>";
                             affichePays.innerHTML += countries.capital + "<br>"+"<br>";
//                           affichePays.innerHTML += '<img src= "country.flags.png" alt="drapeau">'+"<br>";

                }
            }
        }
    }
}

btnAfr.addEventListener('click',()=> {
    showCountryByContinent('Africa')
});
btnAmq.addEventListener('click',()=> {
    showCountryByContinent('Americas')
});
btnAsie.addEventListener('click',()=> {
    showCountryByContinent('Asia')
});
btnEur.addEventListener('click',()=> {
    showCountryByContinent('Europe')
});