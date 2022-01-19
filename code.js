let btnAfr = document.getElementById("afrique");
let btnAmq = document.getElementById("ameriques");
let btnAsie = document.getElementById("asie");
let btnEur = document.getElementById("europe");
let affichePays = document.querySelector("div");


function showCountryByContinent(continent){
    affichePays.textContent = "" 
    let req = new XMLHttpRequest
    req.open("get", 'https://restcountries.com/v3.1/lang/french');
    req.responseType = 'json';

     req.send();
     req.onload = () => {
         if (req.readyState == XMLHttpRequest.DONE){
             if (req.status == 200) {

                 let world = req.response;
                 let drapeau;
                 for (const countries of world) {
                     if (countries.region.includes(continent)) {
                         affichePays.innerHTML += countries.name.common + "<br>";
                         affichePays.innerHTML += countries.capital + "<br>";
                         drapeau = countries.flags.png;
                         affichePays.innerHTML += '<img src=' + drapeau +' alt="drapeau pays">'+"<br>"+"<br>";
                         console.log(drapeau);

                }
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