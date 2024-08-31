let mainArea = document.getElementById('mainArea')
let input = document.getElementById('inputPoint')
let searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click',async () =>{
    let values = document.getElementById('inputPoint').value
    try{
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d1f61619e8e74eedbcd20020242808&q=${values}`)
        let weatherInfos = await response.json()
        let headerTemp = document.getElementById('tempText')
        let headerWind = document.getElementById('windText')
        let headerHum = document.getElementById('humidText')
        let footerText = document.getElementById('span')
        footerText.textContent = `${weatherInfos.current.last_updated} (Local time)`
        headerTemp.textContent = weatherInfos.current.temp_c
        headerWind.textContent = weatherInfos.current.wind_kph
        headerHum.textContent = weatherInfos.current.humidity
    
} 
    catch (error){
        let headerTemp = document.getElementById('tempText')
        let headerWind = document.getElementById('windText')
        let headerHum = document.getElementById('humidText')
        headerTemp.textContent = `Cidade não encontrada!`
        headerWind.textContent = `Cidade não encontrada!`
        headerHum.textContent = `Cidade não encontrada!`
        console.log(error)
    }
})



