import { Link } from "react-router-dom";

// Componente para las tarjetas de navegación
const DocCard = ({
  title,
  desc,
  to,
  icon,
  color,
}: {
  title: string;
  desc: string;
  to: string;
  icon: string;
  color: string;
}) => (
  <Link
    to={to}
    className="group block p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#6db33f] transition-all"
  >
    <div
      className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-110 transition-transform`}
    >
      <span className="text-xl font-bold">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#6db33f] transition-colors">
      {title}
    </h3>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    <div className="mt-4 flex items-center text-xs font-bold text-[#6db33f] uppercase tracking-wider">
      Explorar Documentación →
    </div>
  </Link>
);

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased">
      {/* Mini Header para la Home */}
      <header className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            Official Developer Resources
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Dev<span className="text-[#6db33f]">Standard</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Seleccione el entorno de ejecución para acceder a las
            especificaciones técnicas, guías de implementación y referencias de
            API.
          </p>
        </div>
      </header>

      {/* Grid de opciones */}
      <main className="max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DocCard
            title="Spring Boot"
            desc="Referencia de persistencia JPA, seguridad web y arquitectura de servicios REST para entornos Java."
            to="/guia"
            icon="S"
            color="bg-[#6db33f]"
          />

          <DocCard
            title="Desarrollo Web"
            desc="Estándares de Frontend, hooks de React, gestión de estado y optimización de interfaces modernas."
            to="/web" // Aquí puedes crear otra ruta luego
            icon="W"
            color="bg-blue-600"
          />

          <DocCard
            title="Móviles"
            desc="Documentación para desarrollo multiplataforma, componentes nativos y ciclo de vida de aplicaciones."
            to="/moviles" // Aquí puedes crear otra ruta luego
            icon="M"
            color="bg-purple-600"
          />
        </div>
      </main>

      {/* Footer minimalista */}
      <footer className="mt-auto py-8 text-center text-slate-400 text-[10px] uppercase tracking-[0.2em] font-medium">
        Standard Documentation Portal • v2026.3.1
      </footer>
    </div>
  );
};
