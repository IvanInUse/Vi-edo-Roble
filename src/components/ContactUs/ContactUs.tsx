import React from 'react';

const ContactUs = () => {
    return (
        <section className="py-16 bg-gray-50 sm:py-20 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Información */}
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Envianos un mensaje
                        </h2>

                        <p className="max-w-xl mt-6 text-base leading-7 text-gray-600 sm:text-lg">
                            ¿Tenés alguna consulta, querés conocer más sobre nuestros
                            vinos o simplemente querés ponerte en contacto con nosotros?
                            Estamos para ayudarte y responder todas tus preguntas.
                        </p>

                        {/* Información adicional */}
                        <div className="grid gap-8 mt-14 sm:grid-cols-2">

                            <div>
                                <p className="text-xs font-bold tracking-widest text-gray-900 uppercase">
                                    Horarios de atención
                                </p>

                                <p className="mt-4 text-base font-medium leading-7 text-gray-900">
                                    Lunes - Viernes
                                    <br />
                                    9:00 hs a 18:00 hs
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-widest text-gray-900 uppercase">
                                    Nuestra dirección
                                </p>

                                <p className="mt-4 text-base font-medium leading-7 text-gray-900">
                                    Argentina, Buenos Aires, Mar del Plata, Luro 2387
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-widest text-gray-900 uppercase">
                                    Contacto
                                </p>

                                <p className="mt-4 text-base font-medium leading-7 text-gray-900">
                                    +54 9 223 000-0000
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-widest text-gray-900 uppercase">
                                    También podés
                                </p>

                                <p className="mt-4 text-base font-medium leading-7 text-gray-900">
                                    Escribirnos directamente
                                    <br />
                                    por {' '}
                            <a
                                href="tel:+5491100000000"
                                className="font-semibold underline underline-offset-4 transition-colors duration-200 hover:text-gray-500"
                            >
                                WhatsApp
                            </a>
                            {' '}
                                </p>
                            </div>

                        </div>

                        
                    </div>

                    {/* Formulario */}
                    <div className="p-6 bg-white shadow-xl rounded-2xl sm:p-8 lg:p-10">

                        <form className="space-y-6">

                            {/* Nombre */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-semibold text-gray-900"
                                >
                                    Tu nombre
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ingresá tu nombre completo"
                                    className="w-full px-5 py-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl outline-none transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                                />
                            </div>

                            {/* Asunto */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-sm font-semibold text-gray-900"
                                >
                                    Asunto
                                </label>

                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="¿En qué podemos ayudarte?"
                                    className="w-full px-5 py-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl outline-none transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-semibold text-gray-900"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Ingresá tu email"
                                    className="w-full px-5 py-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl outline-none transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                                />
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-semibold text-gray-900"
                                >
                                    Escribí tu mensaje
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Escribinos tu consulta..."
                                    className="w-full px-5 py-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl outline-none resize-none transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                                />
                            </div>

                            {/* Botón */}
                            <button
                                type="submit"
                                className="w-full px-6 py-4 text-sm font-semibold text-white transition-all duration-200 bg-gray-900 rounded-xl hover:bg-gray-700"
                            >
                                Enviar mensaje
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;