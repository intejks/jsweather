const apikey = "0404dbd7730bab54e665edb934fab46b";
const url = "https://api.openweathermap.org/data/2.5/weather?lat=48.856&lon=2.352&appid=0404dbd7730bab54e665edb934fab46b";
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=48.856&lon=2.352&appid=0404dbd7730bab54e665edb934fab46b"

// OpenWeather envoie la temp en Kelvin. On doit donc la convertir
function convertion(val){
    return (val - 273).toFixed(2)
}
fetch (url)
.then(res => {

    if(res.ok){
        res.json().then(data => {
            var nameval = data['name'];
            // console.log("data = ", data);
            // console.log("data.main = ", data.main);
            console.log("data.main.temp = ", data.main.temp);
            console.log("data.main.name = ", data.main.name);
            const temperature = (Math.trunc(data.main.temp) - 273); 
            const icon = `ressources/jour/${data.weather.icon}.svg`;

            // math trunc pour retirer décimales de la temp. - 273 car la temp est donnée en kelvin 
            const cityname = data.name;
            const citylogo = (data.weather.icon);
            
            document.getElementById('temp').innerHTML = (temperature + "°");
            document.getElementById('cityoutput').innerHTML = cityname;
            document.getElementById('templog').innerHTML.data = data.weather.icon + '.svg';
        })

    } else {
        console.log("erreur");
        document.getElementById('temp').innerHTML = "ERREUR DANS L'API "

    }

fetch (forecasturl)
.then (res => {

        if(res.ok) {
            res.json().then(data => {
                var nameval = data['name']
                console.log("data forecast = ", data);
                console.log("temperature jour 1 = ", data.list[0].main.temp);
                const forecast1 = (Math.trunc(data.list[0].main.temp) - 273);
                const forecast2 = (Math.trunc(data.list[1].main.temp) - 273);
                const forecast3 = (Math.trunc(data.list[2].main.temp) - 273);
                const forecast4 = (Math.trunc(data.list[3].main.temp) - 273);
                const forecast5 = (Math.trunc(data.list[4].main.temp) - 273);
                const forecast6 = (Math.trunc(data.list[5].main.temp) - 273);
                const forecast7 = (Math.trunc(data.list[6].main.temp) - 273);

                document.getElementById('fore1').innerHTML = (forecast1 + "°");
                document.getElementById('fore2').innerHTML = (forecast2 + "°");
                document.getElementById('fore3').innerHTML = (forecast3 + "°");
                document.getElementById('fore4').innerHTML = (forecast4 + "°");
                document.getElementById('fore5').innerHTML = (forecast5 + "°");
                document.getElementById('fore6').innerHTML = (forecast6 + "°");
                document.getElementById('fore7').innerHTML = (forecast7 + "°");
                
            })
        }
    })
}) 