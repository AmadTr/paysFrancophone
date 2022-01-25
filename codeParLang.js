let btnAfr = document.getElementById("afrique");
let btnAmq = document.getElementById("ameriques");
let btnAsie = document.getElementById("asie");
let btnEur = document.getElementById("europe");
let btnOce = document.getElementById("oceanie");
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
                        drapeau = countries.flags.png;
                        let divP = document.createElement('div');
                        divP.classList.add('divPays')
                        affichePays.appendChild(divP);

                        // document.affichePays.appendChild("divP")
                         divP.innerHTML += "<p>"+"Name : "+countries.name.common +"<br>"+"Nom : "+countries.name.nativeName.fra.common + "</p>";
                         divP.innerHTML += "<p>"+"Capital : "+countries.capital + "</p>";
                         divP.innerHTML += '<img src=' + drapeau +' alt="drapeau pays">'+"<br>"+"<br>";

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
btnOce.addEventListener('click',()=> {
    showCountryByContinent('Oceania')
});
