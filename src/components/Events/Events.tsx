import React from 'react';

import wineTasting from '../../assets/Events/wine-tasting.png';
import privateEvent from '../../assets/Events/private-event.jpg';
import wineryVisit from '../../assets/Events/winery-visit.png';

const events = [
    {
        image: wineTasting,
        title: 'Catas de vino',
        description:
            'Descubrí nuevos sabores y conocé más sobre nuestros vinos en una experiencia pensada para disfrutar y aprender.',
    },
    {
        image: privateEvent,
        title: 'Eventos privados',
        description:
            'Celebrá momentos especiales junto a Robles. Creamos experiencias únicas para reuniones, celebraciones y encuentros.',
    },
    {
        image: wineryVisit,
        title: 'Visitas a la bodega',
        description:
            'Conocé de cerca nuestra pasión por el vino y descubrí el proceso detrás de cada una de nuestras botellas.',
    },
];

const Events = () => {
    return (
        <section className="py-16 bg-gray-50 sm:py-20 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                {/* Encabezado */}
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                        Experiencias en los Robles
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Eventos
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                        El vino también se disfruta compartiendo. Descubrí nuestras
                        experiencias y encontrá la mejor manera de disfrutar Robles.
                    </p>
                </div>

                {/* Tarjetas */}
                <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">

                    {events.map((event) => (
                        <div
                            key={event.title}
                            className="overflow-hidden bg-white shadow-sm group rounded-2xl"
                        >
                            {/* Imagen */}
                            <div className="overflow-hidden aspect-[4/3]">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Contenido */}
                            <div className="p-6 sm:p-7">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {event.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {event.description}
                                </p>

                                <a
                                    href="#"
                                    className="inline-flex items-center mt-6 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:text-gray-500"
                                >
                                    Conocer más

                                    <svg
                                        className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
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
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Events;