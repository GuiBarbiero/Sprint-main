import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="backdrop-blur-md bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-12 rounded-lg">
                <div className="logo flex justify-center md:justify-start mb-4 md:mb-0">
                    <img src="Turbo Game logo.png" alt="Logo" className="h-16" />
                </div>
                <nav className="flex justify-center md:justify-end">
                    <ul className="flex flex-col md:flex-row justify-end list-none border border-bg-customGray rounded-full p-5 bg-black-900">
                        <li className="mb-2 md:mb-0 md:ml-5 relative">
                            <NavLink to="/" className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-red-500 transition-all ease-linear">
                                Menu
                            </NavLink>
                        </li>
                        <li className="mb-2 md:mb-0 md:ml-5 relative">
                            <NavLink to="/double" className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-red-500 transition-all ease-linear">
                                Jogar agora
                            </NavLink>
                        </li>
                        <li className="md:ml-5 relative">
                            <NavLink to="/loja" className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-red-500 transition-all ease-linear">
                                Loja
                            </NavLink>
                        </li>
                        <li className="ml-5 relative">
                            <NavLink to="/login" className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-red-500 transition-all ease-linear">
                                Login
                            </NavLink>
                    </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}
