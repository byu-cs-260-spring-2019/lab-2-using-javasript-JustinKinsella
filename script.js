window.onload = function() {
    document.getElementById("weatherSubmit").addEventListener("click", async function(event) {
        event.preventDefault();
        const value = document.getElementById("weatherInput").value;
        if (value === "")
        
        return;
        console.log(value);

        const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" 
        + "&APPID=940e865a98c5a4db87d21e47ac1afe68";
        try {
         // trying to do something that might fail;
            response = await fetch(url);
         //   console.log("response: ", response);
            json = await response.json();
            console.log("json: ", json);
            
         
            let results = "";
            results += '<h2>Weather in ' + json.name + "</h2>";
            for (let i=0; i < json.weather.length; i++) {
            results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (let i=0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                    results += ", "
            }
            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;

            const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" 
               + "&APPID=940e865a98c5a4db87d21e47ac1afe68";
        
            response = await fetch(url2);
            json = await response.json();
            console.log("json: ", json);

            let forecast1 = "";
            let day = json.list[0].dt_txt.charAt(9);
            // for (let i=0; i < json.list.length; i++) {
            //     forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
            //     forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
            //     forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'

                
            //     if(json.list[i].dt_txt.charAt(9) == day){
            //         document.getElementById("day1").innerHTML += forecast;
            //     }
            //     if(json.list[i].dt_txt.charAt(9) == day + 1){
            //         document.getElementById("day2").innerHTML += forecast;
            //     }               
            //     if(json.list[i].dt_txt.charAt(9) == day + 2){
            //         document.getElementById("day3").innerHTML += forecast;
            //     }
            //     if(json.list[i].dt_txt.charAt(9) == day + 3){
            //         document.getElementById("day4").innerHTML += forecast;
            //     }
            //     if(json.list[i].dt_txt.charAt(9) == day + 4){
            //         document.getElementById("day5").innerHTML += forecast;
            //     }
            // }
            let i=0;
            forecast1 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2>";
            while(json.list[i].dt_txt.charAt(9) == day){
                forecast1 += "<h3>" + moment(json.list[i].dt_txt).format("h:mm:ss a") + "</h3>";
                forecast1 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast1 += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                i++;
            }
            document.getElementById("day1").innerHTML += forecast1;
            
            day++;
            let forecast2 = "";
            forecast2 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2>";
            while(json.list[i].dt_txt.charAt(9) == day){
                forecast2 += "<h3>" + moment(json.list[i].dt_txt).format("h:mm:ss a") + "</h3>";
                forecast2 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast2 += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                i++;
            }
            document.getElementById("day2").innerHTML += forecast2;
            
            day++;
            let forecast3 = "";
            forecast3 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2>";
            while(json.list[i].dt_txt.charAt(9) == day){
                forecast3 += "<h3>" + moment(json.list[i].dt_txt).format("h:mm:ss a") + "</h3>";
                forecast3 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast3 += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                i++;
            }
            document.getElementById("day3").innerHTML += forecast3;

            day++;
            let forecast4 = "";
            forecast4 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2>";
            while(json.list[i].dt_txt.charAt(9) == day){
                forecast4 += "<h3>" + moment(json.list[i].dt_txt).format("h:mm:ss a") + "</h3>";
                forecast4 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast4 += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                i++;
            }
            document.getElementById("day4").innerHTML += forecast4;
            
            day++;
            let forecast5 = "";
            forecast5 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2>";
            while(json.list[i].dt_txt.charAt(9) == day){
                forecast5 += "<h3>" + moment(json.list[i].dt_txt).format("h:mm:ss a") + "</h3>";
                forecast5 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast5 += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                i++;
            }
            document.getElementById("day5").innerHTML += forecast5;


        }catch(err) {
            console.log(err);
        }

        //I may be able to keep one Box and have it display both the current weather and forecast. 

    });

    // document.getElementById("forecastSubmit").addEventListener("click", async function(event) {
    //     event.preventDefault();
    //     const value = document.getElementById("forecastInput").value;
    //     if (value === "")
        
    //     return;
    //     console.log(value);

    //     const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" 
    //     + "&APPID=940e865a98c5a4db87d21e47ac1afe68";
    //     try {
    //         const response = await fetch(url2);
    //         const json = await response.json();
    //         console.log("json: ", json);

    //         let forecast = "";
    //         for (let i=0; i < json.list.length; i++) {
    //             forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
    //             forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
    //             forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
    //         }
    //         document.getElementById("forecastResults").innerHTML = forecast;
    //     }catch(err) {
    //         console.log(err);
    //     }

    // });
}

