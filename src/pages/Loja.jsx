import React, { useState } from 'react';

// Importando as imagens
import camisetaLoja from '../assets/Camiseta Loja C.png';
import ingressoLoja from '../assets/Ingresso Loja C.png';
import boneLoja from '../assets/Bone Loja C.png';
import ps5Loja from '../assets/Ps5 Loja C.png';
import caderno01 from '../assets/caderno01.png';
import moedaIcon from '../assets/moeda-loja.png';
import chaveiroLoja from '../assets/chaveiro-sprint-removebg-preview.png'
import copoLoja from '../assets/copo-sprint-removebg-preview.png'
import garrafaLoja from '../assets/garrafa-sprint-removebg-preview.png'
import '../barra-de-navegacao.css'

export default function Home() {
  const [saldo, setSaldo] = useState(1000);

  const produtos = [
    { id: 1, nome: 'Camiseta', preco: 1000, img: camisetaLoja },
    { id: 2, nome: 'Ingresso', preco: 5000, img: ingressoLoja },
    { id: 3, nome: 'Boné 2024', preco: 500, img: boneLoja },
    { id: 4, nome: 'Ps5', preco: 100000, img: ps5Loja },
    { id: 5, nome: 'Copo Térmico', preco: 550, img: copoLoja },
    { id: 6, nome: 'Garrafa Térmica', preco: 750, img: garrafaLoja },
    { id: 7, nome: 'Chaveiro', preco: 150, img: chaveiroLoja },
    { id: 8, nome: 'Caderno', preco: 250, img: caderno01 },
  ];

  const adquirirItem = (preco) => {
    if (saldo >= preco) {
      setSaldo(saldo - preco); 
      alert('Item adquirido com sucesso!');
    } else {
      alert('Saldo insuficiente!');
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Alinhando corretamente o saldo */}
      <div className="flex justify-end">
        <div className="bg-[#202020] border border-gray-600 rounded-full text-center px-4 py-2 flex items-center">
          <img src={moedaIcon} className="w-8 h-8 mr-2" alt="Turbo Coins" />
          <p className="text-white font-semibold">R${saldo}</p>
        </div>
      </div>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 text-center shadow-lg"
          >
            {produto.img ? (
              <img
                src={produto.img}
                alt={produto.nome}
                className="w-full h-auto mb-4 rounded-md"
              />
            ) : (
              <div className="w-full h-40 bg-gray-600 mb-4 rounded-md"></div>
            )}
            <h3 className="text-white font-bold text-lg mb-2">{produto.nome}</h3>
            <p className="text-gray-400 text-sm mb-4">R${produto.preco}</p>
            <button
              onClick={() => adquirirItem(produto.preco)}
              className="bg-neutral-700 text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
            >
              ADQUIRIR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}