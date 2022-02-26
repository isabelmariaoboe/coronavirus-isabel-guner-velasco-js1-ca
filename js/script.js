const url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry%2Ctype&input=Hospitals&inputtype=textquery&key=AIzaSyA1IreY-l6sSmT8anfkb_unOUtH2ym9NAM"

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");


async function callApi(){
    try {
        const response = await fetch(corsFix);
        const json = await response.json();

        console.log(json);
        console.log(json.candidates);
        console.log(json.candidates.length);

        var hospitals = json.candidates;

        resultsContainer.innerHTML = "";
        
        for(let i = 0; i<hospitals.length; i++){

            resultsContainer.innerHTML += `<div class="card">
                                            <h2>${hospitals[i].name}<h4>
                                            <h4>${hospitals[i].formatted_address}<h4>
                                            <h4>${hospitals[i].rating}<h4>
                                            </div>`
        }   
         
    } catch(error){
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }

}

callApi()


