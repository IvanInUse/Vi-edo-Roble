import React from 'react';
import aboutImage from '../../assets/About-us.png';

const AboutUs = () => {
    return (
        <section className="py-16 bg-white sm:py-20 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

                    {/* Texto */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                            Sobre nosotros
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Quienes somos
                        </h2>

                        <p className="max-w-xl mt-6 text-base leading-7 text-gray-600 sm:text-lg">
                            Somos una familia apasionada por el mundo del vino y por
                            compartir experiencias únicas. Seleccionamos cada uno de
                            nuestros vinos buscando calidad, tradición y ese toque
                            especial que hace que cada momento sea inolvidable.
                        </p>

                        <p className="max-w-xl mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                            En Robles creemos que un buen vino no solo se disfruta,
                            también se comparte. Por eso trabajamos para acercarte
                            una selección pensada para acompañar cada ocasión.
                        </p>

                        <div className="mt-8">
                            <a
                                href="#"
                                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg hover:bg-gray-700"
                            >
                                Conocer más
                                <svg
                                    className="w-4 h-4 ml-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div className="overflow-hidden rounded-2xl">
                        <img
                            src={aboutImage}
                            alt="Nuestro equipo y nuestros vinos"
                            className="object-cover w-full h-[350px] transition-transform duration-500 hover:scale-105 sm:h-[450px] lg:h-[550px]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;