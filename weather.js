
function information() {
    const inputLocation = document.getElementById("weatherTabSearchLocationTxt").value;
    WEATHER_API = `https://api.weatherapi.com/v1/current.json?key=f437505fe00f42eba9963424241009&q=`;
    fetch(WEATHER_API + inputLocation).then((res) => res.json()).then((data) => {

        // Humidity
        const humidTxt = document.getElementById("humidTxt");
        humidTxt.textContent = `${data.current.humidity}  %`;
        console.log(data);

        //Wind
        const windtxt = document.getElementById("windtxt");
        windtxt.textContent = `${data.current.wind_kph}  km/h`;
        console.log(data);

        //Sun Rise
        // const sunRise = document.getElementById("sunRise");
        // sunRise.textContent = `${data.current.wind_kph}km/h`;
        // console.log(data);

        //Sun set
        // const sunset = document.getElementById("sunset");
        // sunset.textContent = `${data.current.wind_kph}km/h`;
        // console.log(data);

        //clouds
        const cloudstxt = document.getElementById("cloudstxt");
        cloudstxt.textContent = `${data.current.cloud}`;


        //uv
        const UVindexTxt = document.getElementById("UVindexTxt");
        UVindexTxt.textContent = `${data.current.uv}`;


        //feels like
        const feelsLikeTxt = document.getElementById("feelsLikeTxt");
        feelsLikeTxt.textContent = `${data.current.feelslike_c}  °C`;

        //location
        const locationSideTabTxt = document.getElementById("locationSideTabTxt");
        locationSideTabTxt.innerHTML = `<img id="locationImg" src="img/lcation.png" alt="">${data.location.name}  `;


        //temp
        let temp = Math.round(data.current.temp_c);
        const TempretureTxtSideTab = document.getElementById("TempretureTxtSideTab");
        TempretureTxtSideTab.textContent = `${temp}  °C`;
        console.log(temp);

        //sunny
        const weathercondition = document.getElementById("weathercondition");
        weathercondition.innerHTML = `<img src="img/icons8-thermometer-48 (1).png" alt="" id="markIcon">${data.current.condition.text}`;



        const lastupdated = new Date(data.current.last_updated);
        const formatdate = new Intl.DateTimeFormat(`en-US`, {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }).format(lastupdated);

        const currentdateTime = document.getElementById("currentdate-time");
        currentdateTime.textContent = `${formatdate}`;

        //image
        const CurrentLocWCImg = document.getElementById("CurrentLocWCImg");
        CurrentLocWCImg.src = data.current.condition.icon;




       








    })
}