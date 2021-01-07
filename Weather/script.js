const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const main = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('form');

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {

    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();
    

    addWeatherToPage(respData);
}

function KtoC(K)  {

    return Math.floor( K - 273.15);
}


function addWeatherToPage(data) { 
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
       
        <h2>  <img src='https://openweathermap.org/img/w/${data.weather[0].icon}.png'/>
       ${temp}°C <img src='https://openweathermap.org/img/w/${data.weather[0].icon}.png'/>
        </h2>
        <small>${data.weather[0].main}</small>
    `;
    //clean
    main.innerHTML = '';
    main.appendChild(weather);


}


form.addEventListener('submit', (e)=>{

e.preventDefault();
const city  = search.value;

if(city) {

    
    getWeatherByLocation(city);

    
}

});

`
<p class ='country>Country	Capital city

Country Start With A
Algeria	Algiers
Angola	Luanda
Country Start With B
Benin	Porto-Novo
Botswana	Gaborone
Burkina Faso	Ouagadougou
Burundi	Gitega
Country Start With C
Cabo Verde	Praia
Cameroon	Yaounde
Central African Republic	Bangui
Chad	N'Djamena
Comoros	Moroni
Congo, Democratic Republic of the	Kinshasa
Congo, Republic of the	Brazzaville
Cote d'Ivoire	Yamoussoukro
Country Start With D
Djibouti	Djibouti (city)
Country Start With E
Egypt	Cairo
Equatorial Guinea	Malabo (de jure), Oyala (seat of government)
Eritrea	Asmara
Eswatini (formerly Swaziland)	Mbabane (administrative), Lobamba (legislative, royal)
Ethiopia	Addis Ababa
Country Start With G
Gabon	Libreville
Gambia	Banjul
Ghana	Accra
Guinea	Conakry
Guinea-Bissau	Bissau
Country Start With K
Kenya	Nairobi
Country Start With L
Lesotho	Maseru
Liberia	Monrovia
Libya	Tripoli
Country Start With M
Madagascar	Antananarivo
Malawi	Lilongwe
Mali	Bamako
Mauritania	Nouakchott
Mauritius	Port Louis
Morocco	Rabat
Mozambique	Maputo
Country Start With N
Namibia	Windhoek
Niger	Niamey
Nigeria	Abuja
Country Start With R
Rwanda	Kigali
Country Start With S
Sao Tome and Principe	São Tomé
Senegal	Dakar
Seychelles	Victoria
Sierra Leone	Freetown
Somalia	Mogadishu
South Africa	Pretoria (administrative), Cape Town (legislative), Bloemfontein (judicial)
South Sudan	Juba
Sudan	Khartoum
Country Start With T
Tanzania	Dodoma
Togo	Lomé
Tunisia	Tunis
Country Start With U
Uganda	Kampala
Country Start With Z
Zambia	Lusaka
Zimbabwe	Harare</p>`