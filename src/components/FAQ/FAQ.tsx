
import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: '¿A donde hacen envios?',
            answer: 'Estamos ubicados en Mar del Plata, Argentina. pero hacemos envios a todo el continente sur-Americano. Conoce nuestras <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">Politicas de lojistica</a>.',
            open: false
        },
        {
            question: '¿Como puedo asistir a sus eventos?',
            answer: 'Para asistir a nuestros eventos. Primero debes <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">Crearte una cuenta</a>. Una vez seas nuestro socio, podes <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">Inscribirte</a> a cualquiera de los eventos disponibles .',
            open: false
        },
        {
            question: '¿De donde consiguen los vinos?',
            answer: 'Los vinos los hacemos nosotros, Tenemos campos donde cultivamos las uvas. Una vez cosechadas, las enviamos a una finca asignada por campo, donde producimos nuestros vinos, los añejamos y hacemos los eventos de cata .',
            open: false
        },
        {
            question: '¿Como puedo hacerme socio?',
            answer: 'Para volverte socio de Viñedo Robles, Debes de <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">Crearte una cuenta</a> y <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">Comprar</a> al menos 2 tandas de vino .',
            open: false
        },
        {
            question: '¿Que beneificios tengo como socio?',
            answer: 'Una vez seas nuestro socio, tenes prioridad en la salida de nuestros vinos, acceso a nuestros eventos de cata y networking, y descuentos especiales.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">FAQ's</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Estas son algunas de las preguntas mas frecuentes entre nuestros compradores</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">¿No encontraste la respuesta que buscabas? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contacta nuestro soporte.</a></p>
            </div>
        </section>
    );
}

export default Faq;