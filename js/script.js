const url = "https://dog-breeds2.p.rapidapi.com/dog_breeds/"

// const proxy = "https://noroffcors.herokuapp.com/";

// const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");


async function callApi(){
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    //     // console.log(json.rawData);
    //     // console.log(json.rawData.length);
    //     var country = json.rawData;
    //     for(let i = 0; i<country.length; i++){
    
    //         // if(!country[i].Country_Region || !country[i].Confirmed || !country[i].Deaths) {
    //         //     console.log("continue")
    //         //     continue;
    //         // }

    //         resultsContainer.innerHTML += `<div class="card">
    //                                         <h4>${country[i].Country_Region}<h4>
    //                                         <h4>${country[i].Confirmed}<h4>
    //                                         <h4>${country[i].Deaths}<h4>
    //                                         </div>`
    //     }    
    } catch(error){
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }

}

callApi()


