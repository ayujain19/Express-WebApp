const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_degree = document.getElementById('temp_degree');
const temp_status = document.getElementById('temp_status');
const submitBtn = document.getElementById('submitBtn');
const datahide =    document.querySelector('.middle_layer');


const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal==="")
    {
        city_name.innerText = "Please Write the City Name Before Search";
        datahide.classList.add('data_hide');
    }
    else
    {
        try
        {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=51dc3c197335560ceafe0e594c1609f0`;
            const response = await fetch(url);
            const data = await response.json();
            const arr = [data];

            city_name.innerText = `${arr[0].name}, ${arr[0].sys.country}`;
            temp_degree.innerText = arr[0].main.temp;
            const tempMood = arr[0].weather[0].main;

            

            if(tempMood=="Clear")
            {temp_status.innerHTML = "<i class='fas fa-sun' style ='color:#eccc68';></i>";}
            else if(tempMood=="Clouds")
            {temp_status.innerHTML = "<i class='fas fa-cloud' style ='color:#f1f2f6';></i>";}
            else if(tempMood=="Rain")
            {temp_status.innerHTML = "<i class='fas fa-cloud-rain' style ='color:#a4b0be';></i>";}
            else
            {temp_status.innerHTML = "<i class='fas fa-sun' style ='color:#eccc68';></i>";}

            datahide.classList.remove('data_hide');
        }
        catch
        {
            city_name.innerText = "Please Write the City Name Properly";
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getInfo);