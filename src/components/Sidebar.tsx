import React from "react";

const Sidebar: React.FC = () => {
  const sections = [
    { name: "Dependencias", id: "dependencias" },
    { name: "Estructura del Proyecto", id: "estructura" },
    { name: "Properties", id: "config" },
    { name: "Entidades (JPA)", id: "entity" },
    { name: "DTO & Validaciones", id: "dto" },
    { name: "MapStruct", id: "mapper" },
    { name: "Repositorios", id: "repo" },
    { name: "Servicios", id: "service" },
    { name: "Controladores", id: "controller" },
    { name: "Seguridad (BCrypt)", id: "security" },
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
              className="text-sm font-medium text-slate-600 hover:text-[#6db33f] transition-colors border-l-2 border-transparent hover:border-[#6db33f] pl-4"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;