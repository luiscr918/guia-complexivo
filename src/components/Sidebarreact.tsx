import React from 'react';

const SidebarReact: React.FC = () => {
  const sections = [
    { name: 'Instalación & Setup', id: 'setup' },
    { name: 'Estructura del Proyecto', id: 'estructura' },
    { name: 'Models (Interfaces)', id: 'models' },
    { name: 'API — Axios Config', id: 'api' },
    { name: 'Services', id: 'services' },
    { name: 'Routes', id: 'routes' },
    { name: 'Pages', id: 'pages' },
    { name: 'Flujo Completo', id: 'flujo' },
  ];

  return (
    <aside className="hidden lg:block w-64 h-[calc(100vh-4rem)] sticky top-16 py-10 overflow-y-auto border-r border-slate-100">
      <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6">
        Documentation Index
      </p>
      <ul className="space-y-4">
        {sections.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-600 hover:text-blue-500 transition-colors border-l-2 border-transparent hover:border-blue-500 pl-4"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarReact;