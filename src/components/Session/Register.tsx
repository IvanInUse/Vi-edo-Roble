import React, { useState, ChangeEvent, FormEvent } from 'react';

interface RegisterProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormDataState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

const Register: React.FC<RegisterProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormDataState>({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [passwordError, setPasswordError] = useState<string>('');

  if (!isOpen) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }

    console.log('Form data submitted:', formData);
    onClose();
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

        {/* Encabezado */}
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Create una cuenta y unete a nuestra cultura
        </h1>
        <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
          Accede a descuentos y eventos, Podras comprar y volerte socio una vez hagas una compra de al menos 2 tandas de vinos
        </p>

        {/* Botón de Google */}
        <button
          type="button"
          className="mt-6 w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span className="font-semibold text-gray-800">Sign up with Google</span>
        </button>

        {/* Separador */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-white text-gray-400">o si no</span>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electronico"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-xs font-bold text-gray-900 mb-1">
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nombre de Usuario"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-xs font-bold text-gray-900 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña (min. 8 caracteres)"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              minLength={8}
              required
            />
          </div>

          {/* Repeat Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-xs font-bold text-gray-900 mb-1">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repite tu contraseña"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              minLength={8}
              required
            />
            {passwordError && (
              <p className="mt-1 text-xs text-red-500 font-medium">{passwordError}</p>
            )}
          </div>

          {/* Checkbox Términos */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="agreeTerms" className="text-xs text-gray-700">
              Acepto los{' '}
              <a href="#" className="text-indigo-600 font-medium hover:underline">
                Terminos y Condiciones
              </a>
            </label>
          </div>

          {/* Botón de Enviar */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full px-6 py-4 text-sm font-semibold text-white transition-all duration-200 bg-gray-900 rounded-xl hover:bg-gray-700"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;