// This JavaScript program reads "countries.json" and renders
// the data to the page using Promises.

(function () {
    
    var promise = new Promise(function(resolve, reject) {
        
                // Standard AJAX request setup and load.
            var request = new XMLHttpRequest();
            request.open('GET', 'countries.json');
 
                // Set function to call when resource is loaded.
            request.onload = function () {
            if (request.status === 200) {
                    var countryInfo = JSON.parse(request.responseText);
                    resolve(countryInfo);
                } else {
                    reject('Page loaded, but status not OK.');
                }   
            };
 
            // Set function to call when loading fails.
            request.onerror = function () {
                reject('Aww, didn\'t work at all.');
            }
 
            request.send();
        });
    
        promise.then(function (countries) {
            var countriesDiv=document.getElementById("countries");
            var countrySubDiv = document.createElement("div");
            countrySubDiv.setAttribute("class","subDiv");
            countries.forEach(function (country)
            {
                var countryDiv= document.createElement("div");

                var countryName=document.createElement("p");
                var countryPopulation=document.createElement("p");
                var countryImg=document.createElement("img");
                var countryCapital=document.createElement("p");
                var countryGdp=document.createElement("p");

                countryName.innerHTML=country.name;
                countryPopulation.innerHTML="Population: " + country.population;
                countryImg.src="./images/"+country.flagURL;
                countryCapital.innerHTML="Capital: " + country.capital;
                countryGdp.innerHTML="GDP: " + country.gdp;

                countryName.setAttribute("class", "countryName");
                countryDiv.setAttribute("class", "country");

                countryDiv.appendChild(countryName);
                countryDiv.appendChild(countryPopulation);
                countryDiv.appendChild(countryImg);        
                countryDiv.appendChild(countryCapital);
                countryDiv.appendChild(countryGdp);

                countrySubDiv.appendChild(countryDiv);
                countriesDiv.appendChild(countrySubDiv);
            });
            }, function (reason) {
            document.getElementById("countries").innerHTML="Fail: " + reason;
                
            });
}());
