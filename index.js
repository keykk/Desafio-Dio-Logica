const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function determinarNivelXP(xp) {
    switch (true) {
      case xp <= 1000:
        return "Ferro";
      case xp >= 1001 && xp <= 2000:
        return "Bronze";
      case xp >= 2001 && xp <= 5000:
        return "Prata";
      case xp >= 5001 && xp <= 7000:
        return "Ouro";
      case xp >= 7001 && xp <= 8000:
        return "Platina";
      case xp >= 8001 && xp <= 9000:
        return "Ascendente";
      case xp >= 9001 && xp <= 10000:
        return "Imortal";
      case xp >= 10001:
        return "Radiante";
      default:
        return "Nível não determinado";
    }
  }


// Função recursiva para solicitar entrada do usuário até que ele digite "sair"
let heroiId = 1;
let texto = "Digite o nome do Heroi "+heroiId;
let nome = "";

function getUserInput() { 
  rl.question(texto+' (digite "sair" para encerrar): ', (userInput) => {
    if (userInput.toLowerCase() === 'sair') {
      rl.close(); // Encerra a leitura do input
    } else  if (!isNaN(userInput)) {
        let xp = parseFloat(userInput);
        console.log("O Herói de nome "+nome+" está no nível de "+determinarNivelXP(xp));
        //rl.close();
        heroiId = heroiId + 1;
        texto = "Digite o nome do Heroi "+heroiId; 
        getUserInput(); // Chama a função novamente para solicitar mais entrada
    } else {
      //console.log('Bem vindo Heroi ', userInput);
      nome = userInput;
      texto = "Digite a experiencia do heroi "+heroiId;
      getUserInput(); // Chama a função novamente para solicitar mais entrada
    }
  });
}

// Inicia o processo solicitando a primeira entrada do usuário
getUserInput();
