import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarReact from "../components/Sidebarreact";

import CodeBlock from "./CodeBlock";

export const GuiaReact = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:flex lg:gap-16">
        <SidebarReact />

        <main className="flex-1 py-12 max-w-4xl">
          <header className="mb-16">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
              React + Vite Reference
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Guía para consumir el backend Spring Boot desde un frontend React
              + Vite + TypeScript con Tailwind, React Router DOM y Axios.
            </p>
          </header>

          {/* 00. SETUP */}
          <section id="setup" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-500 inline-block mb-8 font-mono">
              00. Instalación & Setup
            </h2>
            <p className="mb-4 text-slate-600">
              Crear el proyecto con Vite y luego instalar las dependencias
              necesarias:
            </p>
            <CodeBlock
              title="Terminal — Crear proyecto"
              code={`# 1. Crear proyecto React + Vite + TypeScript
npm create vite@latest nombre-proyecto -- --template react-ts
cd nombre-proyecto

# 2. Instalar dependencias base
npm install

# 3. Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Instalar React Router DOM
npm install react-router-dom

# 5. Instalar Axios
npm install axios`}
            />

            <CodeBlock
              title="tailwind.config.js — Configurar rutas"
              code={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
            />

            <CodeBlock
              title="src/index.css — Importar Tailwind"
              code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
            />
          </section>

          {/* 01. ESTRUCTURA */}
          <section id="estructura" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-500 inline-block mb-8 font-mono">
              01. Estructura del Proyecto
            </h2>
            <p className="mb-6 text-slate-600">
              Estructura recomendada siguiendo el patrón MVC adaptado al
              frontend. Cada carpeta tiene una responsabilidad clara:
            </p>

            <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm mb-6 overflow-x-auto">
              <pre className="text-slate-300 leading-7">{`src/
├── api/
│   └── axiosConfig.ts        ← instancia base de Axios
├── assets/
│   └── logo.png
├── components/
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   └── PrivateRoute.tsx      ← protege rutas autenticadas
├── models/
│   ├── Usuario.ts            ← interfaces/tipos TypeScript
│   ├── Producto.ts
│   └── Categoria.ts
├── pages/
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── ProductosPage.tsx
│   └── CategoriasPage.tsx
├── routes/
│   └── AppRoutes.tsx         ← todas las rutas centralizadas
├── services/
│   ├── authService.ts        ← register / login
│   ├── productoService.ts    ← CRUD productos
│   ├── categoriaService.ts   ← CRUD categorías
│   └── usuarioService.ts     ← CRUD usuarios
├── styles/
│   └── globals.css
├── App.tsx
├── App.css
└── main.tsx`}</pre>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              {[
                [
                  "api/",
                  "Solo contiene la configuración base de Axios (URL del backend, headers por defecto).",
                ],
                [
                  "models/",
                  "Interfaces TypeScript que reflejan exactamente los DTOs del backend.",
                ],
                [
                  "services/",
                  "Una función por cada endpoint del backend. Aquí vive toda la lógica de llamadas HTTP.",
                ],
                [
                  "pages/",
                  "Componentes de página completos. Consumen los services y renderizan la UI.",
                ],
                [
                  "components/",
                  "Componentes reutilizables: Navbar, botones, formularios, PrivateRoute, etc.",
                ],
                [
                  "routes/",
                  "Un solo archivo que centraliza todas las rutas de la aplicación.",
                ],
              ].map(([folder, desc]) => (
                <div
                  key={folder}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3"
                >
                  <code className="text-blue-600 font-bold font-mono text-xs whitespace-nowrap pt-0.5">
                    {folder}
                  </code>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 02. MODELS */}
          <section id="models" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-500 inline-block mb-8 font-mono">
              02. Models (Interfaces TypeScript)
            </h2>
            <p className="mb-4 text-slate-600">
              Las interfaces reflejan exactamente los DTOs del backend. Son el
              "contrato" entre el front y el back. Un modelo por archivo dentro
              de{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                src/models/
              </code>
              .
            </p>

            <CodeBlock
              title="models/Usuario.ts"
              code={`// Refleja el UsuarioDTO del backend
export interface Usuario {
  id?: number;
  email: string;
  password?: string; // WRITE_ONLY: se envía pero no se recibe
}

// Para el login
export interface AuthRequest {
  email: string;
  password: string;
}

// Lo que devuelve el backend tras login/register
export interface AuthResponse {
  id: number;
  email: string;
}`}
            />

            <CodeBlock
              title="models/Categoria.ts"
              code={`export interface Categoria {
  id?: number;
  nombre: string;
}`}
            />

            <CodeBlock
              title="models/Producto.ts"
              code={`export interface Producto {
  id?: number;
  nombre: string;
  precio: number;
  stock: number;
  categoriaId?: number;      // ID del padre (lado N)
  nombreCategoria?: string;  // Campo descriptivo del padre
}`}
            />
          </section>

          {/* 03. API CONFIG */}
          <section id="api" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-500 inline-block mb-8 font-mono">
              03. API — Configuración Axios
            </h2>
            <p className="mb-4 text-slate-600">
              Un solo archivo en{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                src/api/axiosConfig.ts
              </code>{" "}
              que configura la instancia base de Axios. Todos los services la
              importan desde aquí, nunca crean su propia instancia.
            </p>

            <CodeBlock
              title="api/axiosConfig.ts"
              code={`import axios from 'axios';

// URL base de tu backend Spring Boot
export const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});`}
            />

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900 space-y-2">
              <p className="font-bold">¿Por qué una sola instancia?</p>
              <p>
                Si en el futuro cambias el puerto, la URL de producción, o
                necesitas agregar un token de autenticación a todos los
                requests, solo tocas <strong>este archivo</strong> y afecta a
                toda la aplicación automáticamente.
              </p>
            </div>
          </section>

          {/* 04. SERVICES */}
          <section id="services" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-500 inline-block mb-8 font-mono">
              04. Services
            </h2>
            <p className="mb-4 text-slate-600">
              Un archivo por entidad. Cada función corresponde a un endpoint del
              backend. Las páginas <strong>nunca</strong> llaman a Axios
              directamente, siempre usan el service.
            </p>

            <CodeBlock
              title="services/authService.ts"
              code={`import api from '../api/axiosConfig';
import { AuthRequest, AuthResponse, Usuario } from '../models/Usuario';

// POST /auth/register
export const register = async (data: Usuario): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', data);
  return response.data;
};

// POST /auth/login
export const login = async (data: AuthRequest): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', data);
  return response.data;
};`}
            />

            <CodeBlock
              title="services/categoriaService.ts"
              code={`import api from '../api/axiosConfig';
import { Categoria } from '../models/Categoria';

// GET /categorias → lista todas
export const getCategorias = async (): Promise<Categoria[]> => {
  const response = await api.get<Categoria[]>('/categorias');
  return response.data;
};

// GET /categorias/:id → busca por id
export const getCategoriaById = async (id: number): Promise<Categoria> => {
  const response = await api.get<Categoria>(\`/categorias/\${id}\`);
  return response.data;
};

// POST /categorias → crea nueva
export const createCategoria = async (data: Categoria): Promise<Categoria> => {
  const response = await api.post<Categoria>('/categorias', data);
  return response.data;
};

// PUT /categorias/:id → actualiza
export const updateCategoria = async (id: number, data: Categoria): Promise<Categoria> => {
  const response = await api.put<Categoria>(\`/categorias/\${id}\`, data);
  return response.data;
};

// DELETE /categorias/:id → elimina
export const deleteCategoria = async (id: number): Promise<void> => {
  await api.delete(\`/categorias/\${id}\`);
};`}
            />

            <CodeBlock
              title="services/productoService.ts"
              code={`import api from '../api/axiosConfig';
import { Producto } from '../models/Producto';

// GET /productos
export const getProductos = async (): Promise<Producto[]> => {
  const response = await api.get<Producto[]>('/productos');
  return response.data;
};

// GET /productos/:id
export const getProductoById = async (id: number): Promise<Producto> => {
  const response = await api.get<Producto>(\`/productos/\${id}\`);
  return response.data;
};

// GET /productos/categoria/:categoriaId → filtro por categoría
export const getProductosByCategoria = async (categoriaId: number): Promise<Producto[]> => {
  const response = await api.get<Producto[]>(\`/productos/categoria/\${categoriaId}\`);
  return response.data;
};

// POST /productos
export const createProducto = async (data: Producto): Promise<Producto> => {
  const response = await api.post<Producto>('/productos', data);
  return response.data;
};

// PUT /productos/:id
export const updateProducto = async (id: number, data: Producto): Promise<Producto> => {
  const response = await api.put<Producto>(\`/productos/\${id}\`, data);
  return response.data;
};

// DELETE /productos/:id
export const deleteProducto = async (id: number): Promise<void> => {
  await api.delete(\`/productos/\${id}\`);
};`}
            />

            <CodeBlock
              title="services/usuarioService.ts"
              code={`import api from '../api/axiosConfig';
import { Usuario } from '../models/Usuario';

// GET /usuarios
export const getUsuarios = async (): Promise<Usuario[]> => {
  const response = await api.get<Usuario[]>('/usuarios');
  return response.data;
};

// GET /usuarios/:id
export const getUsuarioById = async (id: number): Promise<Usuario> => {
  const response = await api.get<Usuario>(\`/usuarios/\${id}\`);
  return response.data;
};

// POST /usuarios
export const createUsuario = async (data: Usuario): Promise<Usuario> => {
  const response = await api.post<Usuario>('/usuarios', data);
  return response.data;
};

// PUT /usuarios/:id
export const updateUsuario = async (id: number, data: Usuario): Promise<Usuario> => {
  const response = await api.put<Usuario>(\`/usuarios/\${id}\`, data);
  return response.data;
};

// DELETE /usuarios/:id
export const deleteUsuario = async (id: number): Promise<void> => {
  await api.delete(\`/usuarios/\${id}\`);
};`}
            />

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 space-y-1">
              <p className="font-bold">Patrón que se repite en cada service:</p>
              <p>
                1. Importar{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">api</code>{" "}
                desde axiosConfig.
              </p>
              <p>2. Importar el modelo (interface) correspondiente.</p>
              <p>
                3. Cada función es{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  async
                </code>
                , llama a Axios con el método HTTP correcto, y devuelve{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  response.data
                </code>{" "}
                tipado.
              </p>
            </div>
          </section>

          {/* 05. ROUTES */}
          <section id="routes" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-500 inline-block mb-8 font-mono">
              05. Routes
            </h2>
            <p className="mb-4 text-slate-600">
              Todas las rutas centralizadas en un solo archivo. El componente{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                PrivateRoute
              </code>{" "}
              protege las rutas que requieren estar logueado.
            </p>

            <CodeBlock
              title="components/PrivateRoute.tsx"
              code={`import { Navigate, Outlet } from 'react-router-dom';

// Verifica si hay un usuario guardado en localStorage
const PrivateRoute = () => {
  const usuario = localStorage.getItem('usuario');
  // Si no hay usuario, redirige al login
  return usuario ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;`}
            />

            <CodeBlock
              title="routes/AppRoutes.tsx"
              code={`import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProductosPage from '../pages/ProductosPage';
import CategoriasPage from '../pages/CategoriasPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login"    element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas protegidas — requieren estar logueado */}
        <Route element={<PrivateRoute />}>
          <Route path="/productos"  element={<ProductosPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
        </Route>

        {/* Redirigir raíz al login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;`}
            />

            <CodeBlock
              title="App.tsx — Usar las rutas"
              code={`import AppRoutes from './routes/AppRoutes';

function App() {
  return <AppRoutes />;
}

export default App;`}
            />
          </section>

          {/* 06. PAGES */}
          <section id="pages" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-500 inline-block mb-8 font-mono">
              06. Pages
            </h2>
            <p className="mb-4 text-slate-600">
              Las páginas consumen los services con{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                useEffect
              </code>{" "}
              para cargar datos y{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                useState
              </code>{" "}
              para manejar el estado local. Nunca llaman a Axios directamente.
            </p>

            <CodeBlock
              title="pages/LoginPage.tsx"
              code={`import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { AuthRequest } from '../models/Usuario';

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<AuthRequest>({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const usuario = await login(form);
      // Guardamos el usuario en localStorage
      localStorage.setItem('usuario', JSON.stringify(usuario));
      navigate('/productos');
    } catch {
      setError('Credenciales incorrectas. Verifica tu email y contraseña.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Contraseña</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-4">
          ¿No tienes cuenta?{' '}
          <a href="/register" className="text-blue-600 font-semibold hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;`}
            />

            <CodeBlock
              title="pages/RegisterPage.tsx"
              code={`import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import { Usuario } from '../models/Usuario';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<Usuario>({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await register(form);
      navigate('/login');
    } catch {
      setError('Error al registrar. El email puede estar en uso.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Crear cuenta</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Contraseña</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-4">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-blue-600 font-semibold hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;`}
            />

            <CodeBlock
              title="pages/CategoriasPage.tsx"
              code={`import { useEffect, useState } from 'react';
import {
  getCategorias,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from '../services/categoriaService';
import { Categoria } from '../models/Categoria';

const CategoriasPage = () => {
  const [categorias, setCategorias]   = useState<Categoria[]>([]);
  const [form, setForm]               = useState<Categoria>({ nombre: '' });
  const [editandoId, setEditandoId]   = useState<number | null>(null);
  const [error, setError]             = useState('');

  // Cargar la lista al montar el componente
  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    try {
      const data = await getCategorias();
      setCategorias(data);
    } catch {
      setError('Error al cargar categorías.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (editandoId !== null) {
        // Modo edición → PUT
        await updateCategoria(editandoId, form);
      } else {
        // Modo creación → POST
        await createCategoria(form);
      }
      setForm({ nombre: '' });
      setEditandoId(null);
      cargarCategorias(); // Recargar la lista
    } catch {
      setError('Error al guardar la categoría.');
    }
  };

  const handleEditar = (cat: Categoria) => {
    setEditandoId(cat.id!);
    setForm({ nombre: cat.nombre });
  };

  const handleEliminar = async (id: number) => {
    try {
      await deleteCategoria(id);
      cargarCategorias();
    } catch {
      setError('Error al eliminar.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Categorías</h1>

      {/* Formulario crear / editar */}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 space-y-4">
        <h2 className="font-bold text-slate-700">
          {editandoId !== null ? 'Editar categoría' : 'Nueva categoría'}
        </h2>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre de la categoría"
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
          >
            {editandoId !== null ? 'Actualizar' : 'Crear'}
          </button>
          {editandoId !== null && (
            <button
              type="button"
              onClick={() => { setEditandoId(null); setForm({ nombre: '' }); }}
              className="bg-slate-100 text-slate-600 text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Tabla */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-5 py-3 text-left font-bold">ID</th>
              <th className="px-5 py-3 text-left font-bold">Nombre</th>
              <th className="px-5 py-3 text-left font-bold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {categorias.map((cat) => (
              <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3 font-mono text-slate-400">{cat.id}</td>
                <td className="px-5 py-3 font-medium text-slate-800">{cat.nombre}</td>
                <td className="px-5 py-3 flex gap-2">
                  <button
                    onClick={() => handleEditar(cat)}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleEliminar(cat.id!)}
                    className="text-xs font-bold text-red-500 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {categorias.length === 0 && (
              <tr>
                <td colSpan={3} className="px-5 py-6 text-center text-slate-400">
                  No hay categorías registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriasPage;`}
            />

            <CodeBlock
              title="pages/ProductosPage.tsx"
              code={`import { useEffect, useState } from 'react';
import {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
} from '../services/productoService';
import { getCategorias } from '../services/categoriaService';
import { Producto } from '../models/Producto';
import { Categoria } from '../models/Categoria';

const ProductosPage = () => {
  const [productos, setProductos]     = useState<Producto[]>([]);
  const [categorias, setCategorias]   = useState<Categoria[]>([]);
  const [editandoId, setEditandoId]   = useState<number | null>(null);
  const [error, setError]             = useState('');
  const [form, setForm]               = useState<Producto>({
    nombre: '', precio: 0, stock: 0, categoriaId: undefined,
  });

  useEffect(() => {
    cargarProductos();
    cargarCategorias();
  }, []);

  const cargarProductos = async () => {
    try {
      const data = await getProductos();
      setProductos(data);
    } catch {
      setError('Error al cargar productos.');
    }
  };

  const cargarCategorias = async () => {
    const data = await getCategorias();
    setCategorias(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (editandoId !== null) {
        await updateProducto(editandoId, form);
      } else {
        await createProducto(form);
      }
      setForm({ nombre: '', precio: 0, stock: 0, categoriaId: undefined });
      setEditandoId(null);
      cargarProductos();
    } catch {
      setError('Error al guardar el producto.');
    }
  };

  const handleEditar = (p: Producto) => {
    setEditandoId(p.id!);
    setForm({ nombre: p.nombre, precio: p.precio, stock: p.stock, categoriaId: p.categoriaId });
  };

  const handleEliminar = async (id: number) => {
    try {
      await deleteProducto(id);
      cargarProductos();
    } catch {
      setError('Error al eliminar el producto.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Productos</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 space-y-4">
        <h2 className="font-bold text-slate-700">
          {editandoId !== null ? 'Editar producto' : 'Nuevo producto'}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="precio"
            type="number"
            value={form.precio}
            onChange={handleChange}
            placeholder="Precio"
            className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <select
            name="categoriaId"
            value={form.categoriaId ?? ''}
            onChange={handleChange}
            className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Sin categoría</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.nombre}</option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
          >
            {editandoId !== null ? 'Actualizar' : 'Crear'}
          </button>
          {editandoId !== null && (
            <button
              type="button"
              onClick={() => { setEditandoId(null); setForm({ nombre: '', precio: 0, stock: 0 }); }}
              className="bg-slate-100 text-slate-600 text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-slate-200"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Tabla */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-5 py-3 text-left font-bold">ID</th>
              <th className="px-5 py-3 text-left font-bold">Nombre</th>
              <th className="px-5 py-3 text-left font-bold">Precio</th>
              <th className="px-5 py-3 text-left font-bold">Stock</th>
              <th className="px-5 py-3 text-left font-bold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {productos.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3 font-mono text-slate-400">{p.id}</td>
                <td className="px-5 py-3 font-medium text-slate-800">{p.nombre}</td>
                <td className="px-5 py-3 text-slate-600">{p.stock}</td>
                <td className="px-5 py-3 flex gap-2">
                  <button onClick={() => handleEditar(p)} className="text-xs font-bold text-blue-600 hover:underline">Editar</button>
                  <button onClick={() => handleEliminar(p.id!)} className="text-xs font-bold text-red-500 hover:underline">Eliminar</button>
                </td>
              </tr>
            ))}
            {productos.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-6 text-center text-slate-400">
                  No hay productos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductosPage;`}
            />

            <div className="space-y-3 mt-6 text-sm text-slate-600">
              {[
                [
                  "useEffect(() => {}, [])",
                  "Se ejecuta una vez al montar el componente. Aquí se hace la llamada inicial para cargar los datos.",
                ],
                [
                  "useState",
                  "Maneja el estado local: la lista de datos, el formulario, el ID que se está editando y los errores.",
                ],
                [
                  "handleSubmit",
                  "Detecta si estás en modo crear o editar según si editandoId tiene valor. Llama al service correcto y recarga la lista.",
                ],
                [
                  "cargarXxx()",
                  "Función separada para recargar la lista. Se llama al montar y después de cada crear/editar/eliminar.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                >
                  <p className="font-bold text-slate-800 font-mono text-xs mb-1">
                    {title}
                  </p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 07. FLUJO COMPLETO */}
          <section id="flujo" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-500 inline-block mb-8 font-mono">
              07. Flujo Completo
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <p className="font-bold text-slate-800 mb-4">
                🔄 De la UI al Backend y de vuelta
              </p>
              <ol className="space-y-3 text-sm text-slate-700 list-decimal list-inside">
                <li>
                  El usuario llena un formulario en la <strong>Page</strong> y
                  hace submit.
                </li>
                <li>
                  La <strong>Page</strong> llama a una función del{" "}
                  <strong>Service</strong> correspondiente.
                </li>
                <li>
                  El <strong>Service</strong> usa la instancia de Axios de{" "}
                  <strong>axiosConfig</strong> para hacer el request HTTP al
                  backend.
                </li>
                <li>
                  El backend Spring Boot procesa la petición y responde con un
                  DTO en JSON.
                </li>
                <li>
                  Axios recibe la respuesta, el service devuelve{" "}
                  <code className="bg-blue-100 px-1 rounded font-mono">
                    response.data
                  </code>{" "}
                  tipado con la interface del <strong>Model</strong>.
                </li>
                <li>
                  La <strong>Page</strong> actualiza el estado con{" "}
                  <code className="bg-blue-100 px-1 rounded font-mono">
                    setState
                  </code>{" "}
                  y React re-renderiza la UI.
                </li>
              </ol>
            </div>

            <div className="mt-6 bg-slate-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-300 leading-7">{`UI (Page)
  ↓  handleSubmit()
Service (productoService.ts)
  ↓  api.post('/productos', data)
axiosConfig.ts → http://localhost:8080
  ↓  HTTP POST /productos
Backend Spring Boot
  ↓  200 OK { id: 1, nombre: "...", ... }
Service → response.data  (tipado como Producto)
  ↓
Page → setProductos([...])
  ↓
React re-renderiza la tabla ✓`}</pre>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};
