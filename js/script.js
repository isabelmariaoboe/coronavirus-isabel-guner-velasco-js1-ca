const url = "https://coronavirus.m.pipedream.net/"

const proxy = "https://noroffcors.herokuapp.com";

const corsFix = url + proxy;

const resultsContainer = document.querySelector(".results");


async function callApi(){
    try {
        const response = await fetch(corsFix);
        const json = await response.json();
        console.log(json);

        for(let i = 0; i<json.length; i++){
            if(!json[i].Country_Region || !json[i].Confirmed || !json[i].Deaths) {
                continue;
            }

            resultsContainer.innerHTML += `<div class="card">
                                            <h4>${json[i].Country_Region}<h4>
                                            <h4>${json[i].Confirmed}<h4>
                                            <h4>${json[i].Deaths}<h4>
                                            </div>`
        }    
    } catch(error){
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }

}

callApi()