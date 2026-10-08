import React from 'react';
import v1 from '../../assets/Products/v1.png';
import v2 from '../../assets/Products/v2.png';
import v3 from '../../assets/Products/v3.png';
import v4 from '../../assets/Products/v4.png';

const products = [
    {
        image: v1,
        name: 'Vino de Gran Reserva',
        price: 99,
        rating: 5,
        badge: 'New',
        badgeStyle: 'light',
    },
    {
        image: v2,
        name: 'Vino Rosado',
        price: 299,
        rating: 5,
    },
    {
        image: v3,
        name: 'Vino Blanco',
        price: 49,
        oldPrice: 99,
        rating: 0,
        badge: 'Sale',
        badgeStyle: 'dark',
    },
    {
        image: v4,
        name: 'Vino Tinto',
        price: 79,
        rating: 3,
    },
];

const Rating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex items-center mt-2.5 space-x-px">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        index < rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                </svg>
            ))}
        </div>
    );
};

const Products = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Nuestros vinos destacados.
                    </h2>

                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                        Te mostramos nuestros vinos más clásicos y más vendidos,
                        a veces lo más simple es lo mejor.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">

                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="relative group"
                        >
                            {/* Imagen */}
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img
                                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </div>

                            {/* Badge */}
                            {product.badge && (
                                <div className="absolute left-3 top-3">
                                    <p
                                        className={`sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide uppercase rounded-full ${
                                            product.badgeStyle === 'dark'
                                                ? 'text-white bg-gray-900'
                                                : 'text-gray-900 bg-white'
                                        }`}
                                    >
                                        {product.badge}
                                    </p>
                                </div>
                            )}

                            {/* Información */}
                            <div className="flex items-start justify-between mt-4 space-x-4">

                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <a href="#" title={product.name}>
                                            {product.name}
                                            <span
                                                className="absolute inset-0"
                                                aria-hidden="true"
                                            ></span>
                                        </a>
                                    </h3>

                                    <Rating rating={product.rating} />
                                </div>

                                {/* Precio */}
                                <div className="text-right">
                                    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        ${product.price.toFixed(2)}
                                    </p>

                                    {product.oldPrice && (
                                        <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
                                            ${product.oldPrice.toFixed(2)}
                                        </del>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Products;