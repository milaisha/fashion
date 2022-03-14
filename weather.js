window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription =document.querySelector( ".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationtimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector("temperature");
    const temperature = document.querySelector('.temperature span');

    if(navigator.geolocation(position=>{
        long = position.coords.longitude;
        lat = position.coords.latitude;


        const api = 'https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/$(lat),$(long)';
        fetch(api)
    .then(data =>{
        const { temperature,summary,icon }=data.currently

        //set DOM Elements from API
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent =summary;
        locationtimezone.textContent = data.timezone;
        // FORMULA FOR CELSIUS
        let celsius = (temperature -32)*(5/9) 

        //set Icon
        seticons(icon,document.querySelector(".icon"));

        //change temperature to celsius/farenheit
          temparatureSection.addEventListener('click',()=>{
              if(temperatureSpan.textContent === "F"){
                  temperatureSpan.textContent ="C";
                  temperatureSpan.textContent = Math.floor(celsius);
          }else{
            temperatureSpan.textContent ="F";
            temperatureDegree.textContent = temparature;
          }
    }); 
    
    });
}

function seticons(icon,iconId){
    const skycons = new skycons ({color:"white"});
    const currentIcon =icon.replace(/-/g,"_").toUppercase();
    Skycons.play();
    return skycons.set(iconID,skycons{currentIcon});
}

}
});