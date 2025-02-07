// Exercício 1
function inverterFrase() {
    let frase = document.getElementById('fraseInput').value;
    let fraseInvertida = frase.split('').reverse().join('');
    document.getElementById('resultado1').textContent = "Frase invertida: " + fraseInvertida;
}

// Exercício 2
function marcarVogaisNegrito() {
    let frase = document.getElementById('fraseVogaisInput').value;
    let resultado = frase.replace(/[aeiouáéíóúãõ]/gi, (vogal) => `<b>${vogal}</b>`);
    document.getElementById('resultado2').innerHTML = "Frase com vogais em negrito: " + resultado;
}

// Exercício 3
function contarPalavras() {
    let texto = document.getElementById('textoInput').value;
    let palavras = texto.split(/\s+/);
    let contador = {};

    palavras.forEach(palavra => {
        palavra = palavra.toLowerCase();
        contador[palavra] = (contador[palavra] || 0) + 1;
    });

    let tabela = "<tr><th>Palavra</th><th>Ocorrências</th></tr>";
    for (let palavra in contador) {
        tabela += `<tr><td>${palavra}</td><td>${contador[palavra]}</td></tr>`;
    }

    document.getElementById('resultado3').innerHTML = tabela;
}

// Exercício 4
function palavraMaisFrequente() {
    let texto = document.getElementById('textoMaiorInput').value;
    let palavras = texto.split(/\s+/);
    let contador = {};
    let maiorPalavra = '';
    let maiorOcorrencia = 0;

    palavras.forEach(palavra => {
        palavra = palavra.toLowerCase();
        contador[palavra] = (contador[palavra] || 0) + 1;
        if (contador[palavra] > maiorOcorrencia) {
            maiorOcorrencia = contador[palavra];
            maiorPalavra = palavra;
        }
    });

    document.getElementById('resultado4').textContent = `A palavra mais frequente é "${maiorPalavra}" e aparece ${maiorOcorrencia} vezes.`;
}

// Exercício 5
function substituirTexto() {
    let procurar = document.getElementById('procurarInput').value;
    let substituir = document.getElementById('substituirInput').value;
    let texto = document.getElementById('textoSubstituirInput').value;
    let resultado = texto.replace(new RegExp(procurar, 'g'), substituir);
    document.getElementById('resultado5').textContent = "Texto substituído: " + resultado;
}

// Exercício 6
function calcularDiasDeVida() {
    let nascimento = document.getElementById('dataNascimentoInput').value;
    let dataNascimento = new Date(nascimento);
    let dataAtual = new Date();
    let diff = Math.floor((dataAtual - dataNascimento) / (1000 * 60 * 60 * 24));
    document.getElementById('resultado6').textContent = `Você tem ${diff} dias de vida.`;
}

// Exercício 7
function dataPorExtenso() {
    let nascimento = document.getElementById('dataExtensoInput').value;
    let partes = nascimento.split('-');
    let dia = partes[2];
    let mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"][parseInt(partes[1]) - 1];
    let ano = partes[0];
    document.getElementById('resultado7').textContent = `${dia} de ${mes} de ${ano}`;
}

// Exercício 8
function calcularSemanasEntreDatas() {
    let data1 = new Date(document.getElementById('data1Input').value);
    let data2 = new Date(document.getElementById('data2Input').value);
    let diff = Math.abs(data2 - data1);
    let semanas = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    document.getElementById('resultado8').textContent = `A diferença entre as datas é de ${semanas} semanas.`;
}

// Exercício 9
function classificarSenha() {
    let senha = document.getElementById('senhaInput').value;
    if (senha.length < 6) {
        document.getElementById('resultado9').textContent = "Senha fraca!";
    } else {
        document.getElementById('resultado9').textContent = "Senha forte!";
    }
}

// Exercício 10
function codificarTenisPolar() {
    let frase = document.getElementById('fraseCodificarInput').value;
    let resultado = frase.replace(/[aeiouáéíóúãõ]/gi, (vogal) => {
        return vogal.toLowerCase() === 'e' ? 'TENIS' :
               vogal.toLowerCase() === 'o' ? 'POLAR' : vogal;
    });
    document.getElementById('resultado10').textContent = "Frase codificada: " + resultado;
}
