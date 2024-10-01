const Footer = () => {
    return (
        <footer className="bg-[#111111a4] py-10 text-white font-Unbounded">
            <div className="footer-container grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Seção de Contato */}
                <div className="contact-form bg-[#400000] rounded-lg p-5">
                    <form id="contactForm" className="flex flex-col">
                        <input type="text" id="name" placeholder="Nome" required className="bg-[#5a0000] border-none rounded-md text-white mb-2 p-2" />
                        <input type="text" id="phone" placeholder="Telefone" required className="bg-[#5a0000] border-none rounded-md text-white mb-2 p-2" />
                        <textarea id="message" placeholder="Mensagem" required className="bg-[#5a0000] border-none rounded-md text-white mb-2 p-2" />
                        <button type="submit" className="bg-red-600 border-none rounded-md text-white p-2 cursor-pointer">Enviar</button>
                    </form>
                </div>

                {/* Links do Footer */}
                <div className="footer-links flex flex-col md:flex-row justify-evenly">
                    <div>
                        <h3 className="mb-2">Menu</h3>
                        <ul className="list-none p-0 flex flex-col">
                            <li><a href="#" className="text-gray-400 hover:text-red-600">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-600">Jogos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-600">Loja</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-600">Ao vivo</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2">Serviços</h3>
                        <ul className="list-none p-0 flex flex-col">
                            <li><a href="#" className="text-gray-400 hover:text-red-600">Contato</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-600">Afiliado</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-600">Assinatura</a></li>
                        </ul>
                    </div>
                </div>

                {/* Redes Sociais */}
                <div className="social-media flex flex-col items-center">
                    <h3 className="mb-2 font-Montserrat">Siga-nos:</h3>
                    <div className="icons flex justify-center mb-5">
                        <a href="#"><img src="tiktok.svg" alt="Tiktok" className="w-10 h-10 mx-2" /></a>
                        <a href="#"><img src="x-twitter.svg" alt="Twitter" className="w-10 h-10 mx-2" /></a>
                        <a href="#"><img src="instagram.svg" alt="Instagram" className="w-10 h-10 mx-2" /></a>
                    </div>
                    <div className="newsletter flex items-center">
                        <form id="TurboEmail" className="flex">
                            <input type="email" id="mandar" placeholder="name@email.com" className="bg-[#333] border-none rounded-md text-white p-2 mr-2" />
                            <button type="submit" className="bg-red-600 border-none rounded-md text-white p-2 cursor-pointer">Assine o Turbos</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
