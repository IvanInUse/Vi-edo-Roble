import React, { useState } from 'react';
import logo from '../../assets/logo.svg'; 
import heroImage from '../../assets/hero.jpg';

interface HeroProps {
  onOpenRegister?: () => void;
  onOpenLogin?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenLogin }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const handleOpenLogin = () => {
        setIsMobileMenuOpen(false);
        if (onOpenLogin) onOpenLogin();
    };

    const handleOpenRegister = () => {
        setIsMobileMenuOpen(false);
        if (onOpenRegister) onOpenRegister();
    };

    return (
        <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
            <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">

                        {/* Logo + Robles */}
                        <div className="flex flex-shrink-0 items-center">
                            <a href="#" title="Robles" className="inline-flex items-center rounded-md focus:outline-none">
                                <img className="w-auto h-8 brightness-0 invert" src={logo} alt="Robles" />
                                <span className="ml-3 font-serif text-2xl font-normal text-white">
                                    Robles
                                </span>
                            </a>
                        </div>

                        {/* Botón Hamburguesa (pantallas pequeñas) */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none"
                                aria-label="Abrir menú"
                            >
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Links centrales (Desktop) */}
                        <nav className="hidden md:flex md:items-center md:space-x-10">
                            <a href="#" className="font-sans text-base font-normal transition-all duration-200 rounded text-white hover:text-white/70 focus:outline-none">
                                Conócenos
                            </a>
                            <a href="#" className="font-sans text-base font-normal transition-all duration-200 rounded text-white hover:text-white/70 focus:outline-none">
                                Inventario
                            </a>
                            <a href="#" className="font-sans text-base font-normal transition-all duration-200 rounded text-white hover:text-white/70 focus:outline-none">
                                Eventos
                            </a>
                            <a href="#" className="font-sans text-base font-normal transition-all duration-200 rounded text-white hover:text-white/70 focus:outline-none">
                                Contacto
                            </a>
                        </nav>

                        {/* Acciones (Desktop) */}
                        <div className="hidden md:flex md:items-center md:space-x-6">
                            <button
                                type="button"
                                onClick={onOpenLogin}
                                className="font-sans text-base font-normal transition-all duration-200 rounded text-white hover:text-white/70 focus:outline-none"
                            >
                                Iniciar sesión
                            </button>

                            <button
                                type="button"
                                onClick={onOpenRegister}
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-5
                                    py-2
                                    font-sans
                                    text-base
                                    font-normal
                                    leading-7
                                    transition-all
                                    duration-200
                                    border
                                    rounded-lg
                                    text-white
                                    border-primary
                                    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary
                                    hover:bg-white hover:text-black
                                    focus:ring-offset-secondary
                                "
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Menú Lateral Móvil (Drawer) */}
            <div
                className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                    isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <div
                    className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-black border-l border-gray-800 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
                        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div>
                        {/* Encabezado del menú móvil con X */}
                        <div className="flex items-center justify-between pb-6 border-b border-gray-800">
                            <span className="font-serif text-xl text-white">Menú</span>
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-400 hover:text-white text-2xl font-bold p-1 focus:outline-none"
                                aria-label="Cerrar menú"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Opciones de la Navbar */}
                        <nav className="flex flex-col space-y-5 mt-6">
                            <a
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-sans text-white/90 hover:text-white transition-colors focus:outline-none"
                            >
                                Conócenos
                            </a>
                            <a
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-sans text-white/90 hover:text-white transition-colors focus:outline-none"
                            >
                                Inventario
                            </a>
                            <a
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-sans text-white/90 hover:text-white transition-colors focus:outline-none"
                            >
                                Eventos
                            </a>
                            <a
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-sans text-white/90 hover:text-white transition-colors focus:outline-none"
                            >
                                Contacto
                            </a>
                        </nav>
                    </div>

                    {/* Botones de acción inferiores */}
                    <div className="flex flex-col space-y-3 pt-6 border-t border-gray-800">
                        <button
                            type="button"
                            onClick={handleOpenLogin}
                            className="w-full py-2.5 font-sans text-base font-medium text-white border border-gray-700 rounded-lg hover:border-white transition-all focus:outline-none"
                        >
                            Iniciar sesión
                        </button>
                        <button
                            type="button"
                            onClick={handleOpenRegister}
                            className="w-full py-2.5 font-sans text-base font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-all focus:outline-none"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0">
                <img className="object-cover w-full h-full" src={heroImage} alt="" />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            <div className="relative">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="w-full lg:w-2/3 xl:w-1/2">
                        <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
                            Años de experiencia y maestria en la vineria.
                        </h1>

                        <p className="mt-6 tracking-tighter text-white">
                            <span className="font-sans font-normal text-6xl">
                                Para los amantes del
                            </span>
                            <br />
                            <span className="font-serif italic font-normal text-8xl">
                                Buen vino
                            </span>
                        </p>

                        <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.
                        </p>

                        <p className="mt-8 font-sans text-xl font-normal text-white">
                            Empieza en el camino de nuestra cultura
                        </p>

                        <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                            <button
                                type="button"
                                onClick={onOpenRegister}
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-5
                                    py-2
                                    font-sans
                                    text-base
                                    font-semibold
                                    transition-all
                                    duration-200
                                    border-2 border-transparent
                                    rounded-full
                                    sm:leading-8
                                    bg-white
                                    sm:text-lg
                                    text-black
                                    hover:bg-opacity-90
                                    focus:outline-none
                                "
                            >
                                Hazte socio
                            </button>

                            <a
                                href="#"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-5
                                    py-2
                                    font-sans
                                    text-base
                                    font-semibold
                                    transition-all
                                    duration-200
                                    bg-transparent
                                    border-2
                                    rounded-full
                                    sm:leading-8
                                    text-white
                                    border-primary
                                    hover:bg-white
                                    hover:text-black
                                    sm:text-lg
                                    focus:outline-none
                                "
                            >
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;