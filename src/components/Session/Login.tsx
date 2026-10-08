import React, { useState, ChangeEvent, FormEvent } from 'react';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister?: () => void; // Para cambiar opcionalmente de Login a Registro
}

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ isOpen, onClose, onOpenRegister }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login data submitted:', formData);
    onClose();
  };

  const handleSwitchToRegister = () => {
    onClose();
    if (onOpenRegister) {
      onOpenRegister();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón X de cierre */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          ✕
        </button>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Bienvenido de vuelta
        </h1>
        <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
          Ingresa tus credenciales para acceder a tu cuenta.
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
          {/* Email */}
          <div>
            <label htmlFor="login-email" className="block text-xs font-bold text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Contraseña */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="login-password" className="text-xs font-bold text-gray-900">
                Contraseña
              </label>
            </div>
            <input
              type="password"
              id="login-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Enlace de recuperación */}
          <div className="text-right pt-0.5">
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:underline"
            >
              Olvidé mi contraseña
            </a>
          </div>

          {/* Botón de Iniciar Sesión */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full px-6 py-4 text-sm font-semibold text-white transition-all duration-200 bg-gray-900 rounded-xl hover:bg-gray-700"
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        {/* Opción para ir a Registro */}
        {onOpenRegister && (
          <p className="mt-6 text-xs text-gray-600">
            ¿No tienes cuenta?{' '}
            <button
              type="button"
              onClick={handleSwitchToRegister}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Regístrate aquí
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;