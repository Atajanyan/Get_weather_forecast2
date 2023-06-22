

let input = document.querySelector('input')
let button = document.querySelector('button')
let container = document.querySelector('.container')

let result
input.addEventListener('change',(e)=>{
    foo(e.target.value)
})

let API_KEY = '2b4a056247e143370bbaf575a80be823'
function foo(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`)
    .then(res=>res.json())
    .then( res=>{
        container.innerHTML = ''
        res.list.forEach(e => {
            let weatherImg = document.createElement('img')
            weatherImg.src = `https://openweathermap.org/img/w/${e.weather[0].icon}.png`
            let block = document.createElement('div')
            let temp = document.createElement('p')
            temp.textContent = e.main.temp.toFixed(0) + 'C'
            let data = document.createElement('p')
            data.textContent = e.dt_txt
            let min_temp = document.createElement('p')
            min_temp.textContent = e.main.temp_min.toFixed(0) + 'C'
            let max_temp = document.createElement('p')
            max_temp.textContent = e.main.temp_max.toFixed(0) + 'C'
            let wind = document.createElement('p')
            wind.textContent = e.wind.speed
            let row = document.createElement('img')
            row.classList.add('line')
            row.src= './line.png'
            row.style.transform = `rotate(${e.wind.deg}deg)`
            block.append(weatherImg,temp,data,min_temp,max_temp,wind,row)
            container.append(block)
        });
        console.log(res)
     } 
    )

}
