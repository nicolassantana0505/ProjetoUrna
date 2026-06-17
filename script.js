const candidatos = {
    "13": {
        name:"Lula",
        photo:"https://claudiodantas.com.br/wp-content/uploads/2024/12/lula-meme-pete-712x370.jpg.webp"
    },
     "14": {
        name:"Renan Santos",
        photo:"https://pbs.twimg.com/media/HD5KzsKWwAAsMfa.jpg"
    },
     "22": {
        name:"Flávio Bolsonaro",
        photo:"https://cdn.bncamazonas.com.br/wp-content/uploads/2026/06/Modelo-1200x650-16.jpg"
    },
     "30": {
        name:"Zema",
        photo:"https://midias.em.com.br/_midias/jpg/2025/02/12/1000x1000/1_zema-46401369.jpg?20250213074801?20250213074801"
    },
     "77": {
        name:"Padre Kelmon",
        photo:"https://museudememes.com.br/wp-content/uploads/2022/11/Fd3y_YzWIAAqIOj.jpg"
    }
    
}


let voteNumber ="";

function addNumber(num) {
    if (voteNumber.length < 2 && voteNumber !== "BR") {
        voteNumber = voteNumber + num
    
        document.getElementById("numInput").value = voteNumber
        showCandidate()
    }
    }

     const candidateInfo = document.getElementById("candidatoInfo")

function showCandidate() {
   

    if (candidatos[voteNumber]) {
        const candidato = candidatos[voteNumber]

        candidateInfo.innerHTML =  `<img src="${candidato.photo}">
        <p>${candidato.name}</p>`
    } else {
        candidateInfo.innerHTML = `
        <img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/biblioteca-da-pr/simbolos-nacionais/brasao-da-republica/brasaooficialcolorido.png">
        <p>Candidato não encontrado</p> 
        `

        if (voteNumber.length <2) {
            candidateInfo.innerHTML = `
            <img src="https://images.seeklogo.com/logo-png/2/2/cbf-confederacao-brasileira-de-futebol-logo-png_seeklogo-27315.png">
            <p>Digite o número</p>
            `
        }
    }
}

function corrige() {
    voteNumber = ""

    document.getElementById("numInput").value = ""
      candidateInfo.innerHTML = `
            <img src="https://images.seeklogo.com/logo-png/2/2/cbf-confederacao-brasileira-de-futebol-logo-png_seeklogo-27315.png">
            <p>Digite o número</p>
            `
}

function votoBranco(){
    voteNumber = "BR"
    document.getElementById("numInput").value = "BR"
    document.getElementById("candidatoInfo").innerHTML = 
    `<img src="https://images.seeklogo.com/logo-png/2/2/cbf-confederacao-brasileira-de-futebol-logo-png_seeklogo-27315.png"
                    alt="Brasão do Brasil ">
            </div><p>Voto em Branco</p>`
}

function confirma() {
    if (voteNumber === '') {
        alert ("Insira o número do candidato")
        return
    }

    if (voteNumber === "BR") {
        alert("Voto em branco confirmado!")

        corrige()
        return 
    }

    if (candidatos[voteNumber]) {
        alert(`Voto confirmado em ${candidatos[voteNumber].name}!`) 

        corrige();
    } else {
        alert("Número inválido")
    }
    
}
