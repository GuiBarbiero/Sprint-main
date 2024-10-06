import React, { useState } from 'react';

const ArrowChatButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/fechar o chat
  const [messages, setMessages] = useState([]); // Estado para armazenar mensagens
  const [inputValue, setInputValue] = useState(''); // Estado para controlar o input

  // Alterna entre abrir e fechar o chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Função para enviar mensagem do usuário e resposta automática do bot
  const sendMessage = (event) => {
    event.preventDefault();

    if (inputValue.trim()) {
      // Adiciona a mensagem do usuário
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: 'user' },
      ]);

      // Limpa o input
      setInputValue('');

      // Adiciona resposta automática do bot após um pequeno delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Esta é uma resposta automática do bot.', sender: 'bot' },
        ]);
      }, 1000); // Delay de 1 segundo para simular o tempo de resposta do bot
    }
  };

  return (
    <>
      {/* Botão de seta no canto inferior direito */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
          onClick={toggleChat}
        >
          {isOpen ? (
            <span>&#x2715;</span> // Ícone de "X" quando o chat está aberto
          ) : (
            <span>&#x25B2;</span> // Ícone de seta quando o chat está fechado
          )}
        </button>
      </div>

      {/* Chatbot popup */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 h-96 bg-white shadow-lg rounded-lg p-4 transition-all duration-500">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h3 className="text-lg font-bold text-black">Chatbot</h3>
            <button className="text-red-600 hover:text-red-700" onClick={toggleChat}>
              &#x2715;
            </button>
          </div>

          {/* Exibição das mensagens */}
          <div className="chat-content mb-4 overflow-y-auto h-64">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded-lg max-w-[75%] ${
                  message.sender === 'user'
                    ? 'bg-red-100 text-black self-end ml-auto text-right' // Mensagem do usuário, alinhada à direita
                    : 'bg-gray-100 text-black self-start text-left' // Mensagem do bot, alinhada à esquerda
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Formulário de envio de mensagem */}
          <form className="flex" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow border rounded-lg p-2 text-sm text-black"
            />
            <button type="submit" className="ml-2 bg-red-600 text-white p-2 rounded-lg">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ArrowChatButton;
