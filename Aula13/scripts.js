let formName = document.querySelector('.form-name')
let listNames = document.querySelector('tbody')
let imputName = document.querySelector('.form-control')

formName.addEventListener('submit', async function (e) {
    e.preventDefault();

    //console.log(await getApi());

    let infoNames = await getApi(imputName.value);

    listNames.innerHTML = '';
    infoNames.forEach(function (item) {
        listNames.innerHTML += `
    <tr>
            <td>${item['periodo']}</td>
            <td>${item['frequencia']}</td>
    </tr>
    `
    });

});



async function getApi(name) {
    let request = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`);
    

    let response = await request.json();
    return response[0]['res']
}