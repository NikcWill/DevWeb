let container = document.querySelector('.container')
let formulario = document.querySelector('.formulario')
let cidade = document.querySelector('.form-control')


async function getApi(cidade){
    let request = await fetch(`https://weather.contrateumdev.com.br/api/weather/city/?city=${cidade}`)
    let data = await request.json()

    container.innerHTML += `
    <p>${data['name']}</p>
    <p>Temperatuta: ${data['main']['temp']}</p>
    <p>Temperatuta Max: ${data['main']['temp_max']}</p>
    <p>Temperatuta Min: ${data['main']['temp_min']}</p>
    `
}

formulario.addEventListener('submit', function(e){
 e.preventDefault();

 getApi(cidade.value)
 
    
})

