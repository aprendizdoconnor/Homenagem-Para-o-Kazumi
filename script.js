const containerParticulas = document.querySelector('.particulas-fundo');

function criarParticulasHTML(quantidade = 60) {
  for(let i = 0; i < quantidade; i++) {
    const p = document.createElement('div');
    p.classList.add('particula');

    const size = Math.random() * 6 + 4;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    p.style.left = `${Math.random() * 100}vw`;
    p.style.bottom = `-${size}px`;

    const duracao = Math.random() * 12 + 6;
    const delay = Math.random() * -15;

    p.style.animation = `flutuarCima ${duracao}s linear infinite`;
    p.style.animationDelay = `${delay}s`;

    containerParticulas.appendChild(p);
  }
}

criarParticulasHTML();
