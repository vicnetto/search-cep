var inputSpace = document.querySelector("#app form div input")
var submitButton = document.querySelector("#app form div button")
var infoField = document.querySelector("#app form div p")
console.log(infoField);

submitButton.addEventListener('click', cepSubmited)

function cepSubmited(event) {
    event.preventDefault();

    var cep = inputSpace.value

    cep = cep.replace(' ', '')
    cep = cep.replace('.', '')
    cep = cep.trim()

    console.log(cep);

    axios.get("https://viacep.com.br/ws/" + cep + "/json/")
        .then(function (response) {
            infoField.innerText = ''

            console.log(response.data);

            // Good request, but this CEP it's not used
            if (response.data.erro != true) {
                infoField.innerText = response.data.localidade + "/" + response.data.uf + "\n"
                infoField.innerText += response.data.bairro + "\n"
                infoField.innerText += response.data.logradouro + ",\n"
                infoField.innerText += response.data.complemento
            } else {
                infoField.innerText = "Not found!"
            }
        })
        .catch(function (error) {
            infoField.innerText = ''

            infoField.innerText = "Wrong format!\n Format: 12345678"
            console.log(error);
        })
}