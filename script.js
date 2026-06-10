const candidatos = {
    "13": {
        name:"Lula"
        photo:""
    },
     "14": {
        name:"Renan Santos"
        photo:""
    },
     "22": {
        name:"Flávio Bolsonaro"
        photo:""
    },
     "30": {
        name:"Zema"
        photo:""
    },
     "777": {
        name:"Candito Padre"
        photo:""
    },
    
}


let voteNumber ="";

function addNumber(num) {
    if (voteNumber.length < 2 && voteNumber !== "BR") {
        voteNumber = voteNumber + num
    
        document.getElementById("numInput").value = voteNumber
        showCandidate()
    }
    }

function showCandidate() {
    const candidateInfo = document.getElementById("candidatoInfo")

    if (candidatos[voteNumber]) {
        const candidato = candidatos[voteNumber]

        candidateInfo.innerHTML =  `<img src="${candidato.photo}">
        <p>${candidato.name}</p>`
    } else {
        candidateInfo.innerHTML = `
        <img scr="">
        <p>Candidato não encontrado</p> 
        `
    }
}

