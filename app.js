// AXIOS GET
// Texas API
let texasDeath;
let texasCases;
let texasTesting;

axios.get('https://api.covidtracking.com/v1/states/tx/current.json')
    .then(res => {
        texasDeath = res.data.death;
        texasCases = res.data.positive;
        texasTesting = res.data.totalTestResults;
    })
    .then(() => {
        document.getElementById("texasCases").textContent = texasCases;
        document.getElementById("texasDeath").textContent = texasDeath;
        document.getElementById("texasTesting").innerHTML = texasTesting;
    })
    .catch(err => {
        console.log("ERROR!", err)
    })

// USA API
let usaDeath;
let usaCases;
let usaTesting;

axios.get('https://api.covidtracking.com/v1/us/current.json')
    .then(res => {
        usaDeath = res.data[0].death;
        usaCases = res.data[0].positive;
        usaTesting = res.data[0].totalTestResults;
    })
    .then(() => {
        document.getElementById("usaCases").textContent = usaCases;
        document.getElementById("usaDeath").textContent = usaDeath;
        document.getElementById("usaTesting").innerHTML = usaTesting;
    })
    .catch(err => {
        console.log("ERROR!", err)
    })
