console.log('script.js carregado com sucesso');

let gastos = [];
let total = 0;

function adicionarGasto() {
  const descricao = document.getElementById('descricao').value;
  const valor = Number(document.getElementById('valor').value);

  if (!descricao || valor <= 0) {
    alert('Preencha descrição e valor corretamente');
    return;
  }

  gastos.push({ descricao, valor });
  total += valor;

  document.getElementById('total').innerText = `Total gasto: R$ ${total.toFixed(
    2
  )}`;

  document.getElementById('descricao').value = '';
  document.getElementById('valor').value = '';
}

async function perguntarIA() {
  const pergunta = document.getElementById('pergunta').value;

  if (!pergunta) {
    alert('Digite uma pergunta');
    return;
  }

  document.getElementById('respostaIA').innerText =
    '🤖 Pensando... (isso pode levar alguns segundos)';

  const response = await fetch(
    'https://stackblitz-starters-5rlhjteu.stackblitz.io/chat',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pergunta,
        totalGasto: total,
      }),
    }
  );

  const data = await response.json();
  document.getElementById('respostaIA').innerText = '🤖 ' + data.resposta;
}

// 🔥 ISSO AQUI É O QUE RESOLVE O ERRO 🔥
window.adicionarGasto = adicionarGasto;
window.perguntarIA = perguntarIA;
