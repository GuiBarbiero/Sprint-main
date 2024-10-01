import React, { useState, useRef } from 'react';
import './Double.css';

const DoubleHorizontal = () => {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [girando, setGirando] = useState(false);
  const [mensagemResultado, setMensagemResultado] = useState('');

  // Cores disponíveis (Preto, Vermelho, Branco)
  const cores = ['Vermelho', 'Preto', 'Branco'];
  
  // Ref para o container que vai se mover
  const animacaoRef = useRef(null);

  // Repetir as cores várias vezes para simular uma roleta contínua
  const quadrados = ['Vermelho', 'Preto', 'Branco','Vermelho', 'Preto', 'Branco','Vermelho', 'Preto', 'Branco','Vermelho', 'Preto', 'Branco','Vermelho', 'Preto', 'Branco','Vermelho', 'Preto', 'Branco','Vermelho', 'Preto', 'Branco']; // Repetir várias vezes

  // Função para resetar a roleta
  const resetarRoleta = () => {
    animacaoRef.current.style.transition = 'none'; // Remover transição temporariamente
    animacaoRef.current.style.transform = 'translateX(0px)'; // Resetar para a posição inicial
  };

  const iniciarRodada = () => {
    if (!girando && escolhaJogador !== null) {
      setGirando(true);
      setMensagemResultado('');

      // Resetar a roleta antes de começar o novo giro
      resetarRoleta();

      // Aguardar um pequeno tempo para garantir o reset visual
      setTimeout(() => {
        // Definir o resultado final aleatório
        const resultadoFinal = Math.floor(Math.random() * cores.length);

        // Definir um número de voltas (mínimo 3 voltas completas)
        const voltas = 3;
        const posicaoFinalCalculada = (voltas * cores.length + resultadoFinal) * 100; // 100px por quadrado

        // Aplicar a animação de transição
        animacaoRef.current.style.transition = 'transform 5s ease-out'; // Reaplicar a transição
        animacaoRef.current.style.transform = `translateX(-${posicaoFinalCalculada}px)`;

        // Parar a roleta após o tempo da animação (5 segundos)
        setTimeout(() => {
          const corFinal = cores[resultadoFinal];

          if (corFinal === escolhaJogador) {
            setMensagemResultado('Você ganhou!');
          } else {
            setMensagemResultado('Você perdeu!');
          }

          setGirando(false);
        }, 5000); // Duração do giro de 5 segundos
      }, 100); // Pequeno atraso de 100ms para garantir que o reset seja visível
    }
  };

  return (
    <div className="double-horizontal-container">
      <h1>Double - Escolha sua Cor!</h1>

      <div className="escolha-jogador">
        <button
          className={`botao-escolha ${escolhaJogador === 'Vermelho' ? 'selecionado' : ''}`}
          onClick={() => setEscolhaJogador('Vermelho')}
          disabled={girando}
        >
          Vermelho
        </button>
        <button
          className={`botao-escolha ${escolhaJogador === 'Preto' ? 'selecionado' : ''}`}
          onClick={() => setEscolhaJogador('Preto')}
          disabled={girando}
        >
          Preto
        </button>
        <button
          className={`botao-escolha ${escolhaJogador === 'Branco' ? 'selecionado' : ''}`}
          onClick={() => setEscolhaJogador('Branco')}
          disabled={girando}
        >
          Branco
        </button>
      </div>

      <button
        onClick={iniciarRodada}
        disabled={girando || escolhaJogador === null}
        className="botao-girar"
      >
        Começar o jogo
      </button>

      <div className="quadrados-cores">
        <div className="container-animacao" ref={animacaoRef}>
          {quadrados.map((cor, index) => (
            <div key={index} className={`quadrado ${cor.toLowerCase()}`}>
              {cor}
            </div>
          ))}
        </div>

        {/* Linha central fixa para indicar o quadrado no centro */}
        <div className="linha-central"></div>
      </div>

      <h2>{mensagemResultado}</h2>
    </div>
  );
};

export default DoubleHorizontal;
