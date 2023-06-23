let input = document.querySelector("input");
let button = document.querySelector("button");
let container = document.querySelector(".container");

input.addEventListener("change", (e) => {
  search(e.target.value)
});

let API_KEY = "2b4a056247e143370bbaf575a80be823";

function search(cityName) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET',`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`);

  xhr.send()

  xhr.onload = function(){
    if(xhr.status === 404){
      container.textContent = 'No Search Result'
    }else if(xhr.status === 200){
      let res = JSON.parse(xhr.response)
      container.innerHTML = "";
            res.list.forEach((e) => {
              let block = document.createElement("div");
              block.className = 'container-block'
      
              let weatherImg = document.createElement("img");
              weatherImg.src = `https://openweathermap.org/img/w/${e.weather[0].icon}.png`;
      
              let temp = document.createElement("p");
              temp.textContent = e.main.temp.toFixed(0) + " C";
              temp.className = 'container-block__temp'
      
              let data = document.createElement("p");
              data.className = 'container-block__data'
              data.textContent = e.dt_txt;
      
              let min_temp = document.createElement("p");
              min_temp.textContent = 'Minimal: ' + e.main.temp_min.toFixed(0) + " C";
      
              let max_temp = document.createElement("p");
              max_temp.textContent = 'Maximal: ' + e.main.temp_max.toFixed(0) + " C";
      
              let wind = document.createElement("p");
              wind.textContent = 'Wind: ' + e.wind.speed + 'm/s';
      
              let row = document.createElement("img");
              row.classList.add("container-block__line");
              row.src = "./assets/line.png";
              row.style.transform = `rotate(${e.wind.deg}deg)`;
      
              block.append(weatherImg, temp, data, min_temp, max_temp, wind, row);
              container.append(block);
            }
            )
    }
    console.log(xhr );
  }

}
