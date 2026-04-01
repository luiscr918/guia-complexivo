import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CodeBlock from "./CodeBlock";

export const GuiaSpring = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-green-100 selection:text-green-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:flex lg:gap-16">
        <Sidebar />

        <main className="flex-1 py-12 max-w-4xl">
          <header className="mb-16">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
              Spring Boot Reference
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Documentación técnica esencial para crear un proyecto Springboot:
              Persistencia, Validación y Servicios REST.
            </p>
          </header>
          {/* 0. Dependencias */}
          <section id="dependencias" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              00. Dependencias
            </h2>
            <p className="mb-6 text-slate-600">
              Al crear el proyecto en{" "}
              <a
                href="https://start.spring.io"
                target="_blank"
                rel="noreferrer"
                className="text-[#6db33f] font-semibold hover:underline"
              >
                start.spring.io
              </a>
              , usar la siguiente configuración y seleccionar estas
              dependencias:
            </p>

            {/* Project config */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                ["Project", "Maven"],
                ["Language", "Java"],
                ["Spring Boot", "4.0.1"],
                ["Group", "com.tugrupo"],
                ["Packaging", "Jar"],
                ["Java", "21"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-3"
                >
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {label}
                  </span>
                  <span className="text-sm font-bold text-slate-800 font-mono">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Dependencies list */}
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
              Dependencies
            </p>
            <div className="space-y-3 mb-6">
              {[
                {
                  name: "PostgreSQL Driver",
                  tag: "SQL",
                  tagColor: "bg-blue-100 text-blue-700",
                  desc: "Driver JDBC y R2DBC que permite a Java conectarse a una base de datos PostgreSQL de forma independiente.",
                },
                {
                  name: "Spring Web",
                  tag: "WEB",
                  tagColor: "bg-green-100 text-green-700",
                  desc: "Construye aplicaciones web RESTful usando Spring MVC con Apache Tomcat embebido.",
                },
                {
                  name: "Spring Data JPA",
                  tag: "SQL",
                  tagColor: "bg-blue-100 text-blue-700",
                  desc: "Persiste datos en bases SQL usando Java Persistence API con Spring Data e Hibernate.",
                },
                {
                  name: "Lombok",
                  tag: "DEVELOPER TOOLS",
                  tagColor: "bg-slate-100 text-slate-600",
                  desc: "Librería de anotaciones que reduce el código repetitivo (@Data, @Getter, @NoArgsConstructor, etc.).",
                },
                {
                  name: "Spring Security",
                  tag: "SECURITY",
                  tagColor: "bg-amber-100 text-amber-700",
                  desc: "Framework de autenticación y control de acceso altamente personalizable para aplicaciones Spring.",
                },
                {
                  name: "Validation",
                  tag: "I/O",
                  tagColor: "bg-purple-100 text-purple-700",
                  desc: "Bean Validation con Hibernate validator. Habilita @NotBlank, @Email, @Size, @Pattern, etc.",
                },
                {
                  name: "Spring Boot DevTools",
                  tag: "DEVELOPER TOOLS",
                  tagColor: "bg-slate-100 text-slate-600",
                  desc: "Reinicios rápidos de la aplicación, LiveReload y configuraciones para desarrollo mejorado.",
                },
              ].map(({ name, tag, tagColor, desc }) => (
                <div
                  key={name}
                  className="flex items-start gap-4 border border-slate-200 rounded-xl px-5 py-4 bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-bold text-slate-800 text-sm">
                        {name}
                      </span>
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${tagColor}`}
                      >
                        {tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MapStruct warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900">
              <p className="font-bold mb-1">
                ⚠️ MapStruct — Agregar manualmente en pom.xml
              </p>
              <p>
                MapStruct <strong>no está disponible</strong> en Spring
                Initializr. Se agrega a mano después de generar el proyecto. Ver
                sección <strong>04. MapStruct</strong> para el código completo.
              </p>
            </div>
          </section>
          {/* 1. CONFIGURACIÓN */}
          <section id="config" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              01. application.properties
            </h2>
            <p className="mb-6 text-slate-600">
              Un{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                application.properties
              </code>{" "}
              básico sería el siguiente:
            </p>
            <CodeBlock
              title="PostgreSQL Local Config"
              code={`spring.application.name=repaso1
# 1. Conexión a la Base de Datos (PostgreSQL Local)
# Cambia 'nombre_de_tu_bd' por el nombre que creaste en pgAdmin
spring.datasource.url=jdbc:postgresql://localhost:5432/repaso1
spring.datasource.username=postgres
spring.datasource.password=root

# 2. Configuración de Hibernate
# 'update' crea las tablas automáticamente por ti
spring.jpa.hibernate.ddl-auto=update
# Esto muestra el SQL en la consola para saber si funciona
spring.jpa.show-sql=true
# El lenguaje específico de PostgreSQL
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

# 3. Para ver los mensajes de error de @Valid
spring.web.error.include-message=always`}
            />
          </section>

          {/* 2. ENTIDADES */}
          <section id="entity" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              02. JPA Entities & Relations
            </h2>
            <p className="mb-4 text-slate-600 italic">
              Empezamos creando nuestros modelos o entidades.
            </p>

            <h3 className="text-lg font-bold text-slate-800 mb-3 mt-8">
              Cardinalidad
            </h3>

            <div className="mb-6 text-slate-600 space-y-4">
              <div>
                <p className="font-semibold text-slate-700 mb-1">
                  Uno a Varios (1:n)
                </p>
                <p>
                  <strong>RECOMENDACIÓN:</strong> Para este tipo de relación es
                  mejor empezar desde la entidad que tiene el{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                    @ManyToOne
                  </code>
                  .
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">
                  One to One (1:1)
                </p>
                <p>
                  <strong>RECOMENDACIÓN:</strong> Se empieza a hacer la relación
                  desde la entidad que tiene la llave foránea porque controla la
                  relación.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">
                  Many to Many (n:n)
                </p>
                <p>En este tipo de relación hay 2 opciones:</p>
                <ol className="list-decimal list-inside mt-1 space-y-1 pl-2">
                  <li>
                    La tabla intermedia no va a contener más que las llaves
                    foráneas de las otras 2 tablas.
                  </li>
                  <li>
                    La tabla intermedia va a tener más atributos aparte de las
                    llaves foráneas heredadas.
                  </li>
                </ol>
              </div>
            </div>

            <CodeBlock
              title="Relaciones: ManyToOne / OneToMany / ManyToMany"
              code={`// Uno a Varios (1:n)
@ManyToOne
@JoinColumn(name="código_autor")
private Autor autor;

@OneToMany(mappedBy="autor")
private List<Libro> libros;

// One to One (1:1)
@OneToOne(cascade=CascadeType.ALL)
@JoinColumn(name="código_usuario", referencedColumnName="id")
private Usuario usuario;

// En la otra entidad:
@OneToOne(mappedBy="usuario")

// Many to Many (n:n) - Opción 1: solo llaves foráneas
@ManyToMany
@JoinTable(name="prestamo",
  joinColumns=@JoinColumn(name="id_usuario"),
  inverseJoinColumns=@JoinColumn(name="id_libro"))
private List<Libro> libros;

// En la otra entidad:
@ManyToMany(mappedBy="libros")
private List<Usuario> usuarios;`}
            />

            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              Cascade
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Término</th>
                    <th className="px-4 py-3 text-left font-bold">
                      Acción Principal
                    </th>
                    <th className="px-4 py-3 text-left font-bold">
                      ¿Cuándo ocurre?
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "PERSIST",
                      "Guardar",
                      "Al hacer save(padre), se guardan los hijos nuevos.",
                    ],
                    [
                      "MERGE",
                      "Actualizar",
                      "Al editar el padre, se sincronizan los cambios en los hijos.",
                    ],
                    [
                      "REMOVE",
                      "Borrar (en cascada)",
                      "Si borras al padre, se borran todos sus hijos.",
                    ],
                    [
                      "REFRESH",
                      "Sincronizar",
                      "Si recargas el padre desde la BD, se recargan sus hijos.",
                    ],
                    [
                      "DETACH",
                      "Desacoplar",
                      "Saca al padre y a sus hijos del contexto de persistencia.",
                    ],
                    [
                      "ALL",
                      "Combo completo",
                      "Aplica todas las anteriores (Persist + Merge + Remove + ...).",
                    ],
                    [
                      "orphanRemoval",
                      "Limpieza",
                      "Si quitas un hijo de la lista (.remove(hijo)), se borra de la BD.",
                    ],
                  ].map(([term, action, when]) => (
                    <tr
                      key={term}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-mono font-bold text-[#6db33f] text-xs">
                        {term}
                      </td>
                      <td className="px-4 py-3 text-slate-700">{action}</td>
                      <td className="px-4 py-3 text-slate-600">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 text-sm text-amber-900 space-y-2">
              <p>
                <strong>DIFERENCIA CLAVE:</strong>
              </p>
              <p>
                • <strong>CascadeType.REMOVE</strong>: Es como una "bomba
                atómica". Si el padre desaparece, se lleva a todos los hijos con
                él.
              </p>
              <p>
                • <strong>orphanRemoval = true</strong>: Es como "limpieza
                selectiva". Si el padre sigue vivo pero decide que un hijo ya no
                pertenece a su lista, ese hijo es eliminado de la base de datos
                para no dejar basura (huérfanos).
              </p>
            </div>

            <p className="mb-4 text-slate-600">
              Entonces nos quedaría así en la entidad para que tenga más
              sentido:
            </p>
            <CodeBlock
              title="OneToMany con orphanRemoval"
              code={`@OneToMany(mappedBy = "cultivo", cascade = CascadeType.ALL, orphanRemoval = true)`}
            />

            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              Cosas Importantes en Entidades
            </h3>
            <div className="mb-4 text-slate-600 space-y-2 text-sm">
              <p>
                • Usar las anotaciones necesarias:{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  @Entity
                </code>
                ,{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  @NoArgsConstructor
                </code>
                ,{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  @Data
                </code>
              </p>
              <p>
                • El tipo de dato siempre es de objeto, es decir, no sería{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  int
                </code>{" "}
                sino{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  Integer
                </code>
                .
              </p>
              <p>
                • Para atributos decimales hay 2 tipos:{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  Double
                </code>{" "}
                (menos preciso) y{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  BigDecimal
                </code>{" "}
                (para números con más precisión).
              </p>
            </div>

            <CodeBlock
              title="Categoria & Producto Entities"
              code={`package com.itsqmet.repaso1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Producto> productos;
}

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private Double precio;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
}

// Para atributos de tipo fecha:
@JsonFormat(pattern = "yyyy-MM-dd")
@DateTimeFormat(pattern = "yyyy-MM-dd")
private Date fecha;

// Para el id autogenerado:
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;`}
            />
          </section>

          {/* 3. VALIDACIONES */}
          <section id="dto" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              03. DTOs & Bean Validation
            </h2>
            <p className="mb-4 text-slate-600">
              Con la dependencia de validation tenemos acceso a algunas
              validaciones básicas:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold font-mono">
                      Anotación
                    </th>
                    <th className="px-4 py-3 text-left font-bold">Uso</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["@NotNull", "Para objetos"],
                    ["@NotBlank", "Para strings"],
                    ["@NotEmpty", "Para strings y arreglos"],
                    ["@Size(min=10, max=10)", "Para strings y colecciones"],
                    ["@Min", "Para números"],
                    ["@Max", "Para números"],
                    ["@Email", "Para formato de email"],
                    [
                      "@Pattern",
                      "EL MÁS PODEROSO — permite controlar algo muy específico",
                    ],
                  ].map(([ann, use]) => (
                    <tr
                      key={ann}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-mono font-bold text-[#6db33f] text-xs">
                        {ann}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <CodeBlock
              title="UsuarioDTO.java — con validaciones"
              code={`public class UsuarioDTO {
    @NotBlank(message = "El email es obligatorio")
    @Email(message = "Formato de email no válido")
    private String email;

    @NotBlank(message = "La contraseña no puede estar vacía")
    @Size(min = 8, message = "Mínimo 8 caracteres")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$",
             message = "Debe tener mayúscula, minúscula y número")
    private String password;
}

// Ejemplo: @Pattern para teléfono
@Pattern(
  regexp = "^[0-9]{10}$",
  message = "El telefono tiene que tener 10 digitos y solo se permiten numeros")`}
            />

            <h3 className="text-lg font-bold text-slate-800 mb-3 mt-10">
              Enums
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              Para evitar usar datos como{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                "1"
              </code>{" "}
              o{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                "2"
              </code>{" "}
              en los atributos, podemos usar Enums:
            </p>
            <CodeBlock
              title="Enum + Uso en Entidad"
              code={`public enum Categoria {
    CATEGORIA1,
    CATEGORIA2
}

// En la entidad:
@Enumerated(EnumType.STRING)
private Categoria categoria;`}
            />

            <h3 className="text-lg font-bold text-slate-800 mb-3 mt-10">
              DTOs
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              Sirven para enviar y recibir solo lo que se necesite, no toda la
              entidad completa.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4 text-sm text-blue-900 space-y-2">
              <p>
                <strong>Maneja las relaciones:</strong>
              </p>
              <p>
                • Si es el lado <strong>"1"</strong> (ej. Artista):{" "}
                <strong>No pongas la lista</strong> de canciones en el DTO.
              </p>
              <p>
                • Si es el lado <strong>"N"</strong> (ej. Canción): Pon el{" "}
                <strong>ID</strong> y un campo descriptivo (nombre) del padre.
              </p>
            </div>
            <CodeBlock
              title="CategoriaDTO.java"
              code={`package com.itsqmet.repaso1.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoriaDTO {
    private Long id;
    private String nombre;
}

// @JsonProperty para controlar visibilidad:
@JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // El cliente lo envía, pero la API no lo devuelve
private String password;

@JsonProperty(access = JsonProperty.Access.READ_ONLY) // Solo lectura
private Long id;`}
            />
          </section>

          {/* 4. MAPPER */}
          <section id="mapper" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              04. MapStruct Interface
            </h2>
            <p className="mb-4 text-slate-600">
              Para mapear desde DTO a Entity hay que agregar las dependencias de
              MapStruct en el{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                pom.xml
              </code>
              , luego crear una interfaz en un nuevo paquete{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                com.itsqmet.repaso1.mapper
              </code>
              .
            </p>

            <CodeBlock
              title="pom.xml — Dependencias MapStruct"
              code={`<dependencies>
  <dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct</artifactId>
    <version>1.5.5.Final</version>
  </dependency>
</dependencies>

<!-- Dentro de maven-compiler-plugin -> annotationProcessorPaths -->
<path>
  <groupId>org.mapstruct</groupId>
  <artifactId>mapstruct-processor</artifactId>
  <version>1.5.5.Final</version>
</path>`}
            />

            <CodeBlock
              title="PrestamoMapper.java — Ejemplo Completo"
              code={`@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface PrestamoMapper {
    // Entidad a DTO
    @Mapping(source = "usuario.id", target = "usuarioId")
    @Mapping(source = "libro.id", target = "libroId")
    @Mapping(source = "usuario.nombreCompleto", target = "nombreUsuario")
    @Mapping(source = "libro.titulo", target = "tituloLibro")
    PrestamoDTO toDTO(Prestamo prestamo);

    // DTO a Entidad
    @Mapping(target = "usuario", ignore = true)
    @Mapping(target = "libro", ignore = true)
    Prestamo toEntity(PrestamoDTO prestamoDTO);

    // Para actualizaciones parciales
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "usuario", ignore = true)
    @Mapping(target = "libro", ignore = true)
    void actualizarDesdeDto(PrestamoDTO dto, @MappingTarget Prestamo entidad);
}`}
            />

            <div className="space-y-5 mt-6 text-sm text-slate-600">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-2">Paso 1: @Mapper</p>
                <p>
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    componentModel = "spring"
                  </code>
                  : Crea un bean de Spring → puedes usar{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    @Autowired
                  </code>{" "}
                  en cualquier lugar.
                </p>
                <p className="mt-1">
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    nullValuePropertyMappingStrategy = IGNORE
                  </code>
                  : Si mandas campos vacíos (nulos), MapStruct{" "}
                  <strong>no borrará</strong> la información que ya existe en la
                  base de datos.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-2">
                  Paso 2: toDTO — Aplanamiento
                </p>
                <p>
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    source = "usuario.id"
                  </code>
                  : Entra al objeto{" "}
                  <code className="font-mono text-slate-700">usuario</code> y
                  saca su <code className="font-mono text-slate-700">id</code>.
                  Los campos con el mismo nombre en ambos lados se mapean{" "}
                  <strong>automáticamente</strong>.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-2">
                  Paso 3: toEntity — ¿Por qué ignore?
                </p>
                <p>
                  El DTO solo trae el{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    usuarioId
                  </code>{" "}
                  (un número). La entidad necesita un objeto{" "}
                  <code className="font-mono text-slate-700">Usuario</code>{" "}
                  completo. Al ignorarlo en MapStruct, tú buscas el usuario real
                  en la BD dentro del <strong>Service</strong> y lo asignas
                  manualmente.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-2">
                  Paso 4: actualizarDesdeDto — El Parche
                </p>
                <p>
                  Se usa para el método <strong>PUT</strong>.{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    @MappingTarget
                  </code>{" "}
                  le dice a MapStruct que no cree un objeto nuevo, sino que tome
                  la entidad ya existente y cambie sus datos. Los campos en{" "}
                  <code className="font-mono text-slate-700">
                    @Mapping(ignore=true)
                  </code>{" "}
                  son los que <strong>nunca</strong> se actualizarán.
                </p>
              </div>
            </div>
          </section>

          {/* 5. REPOSITORIOS */}
          <section id="repo" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              05. Repositorios
            </h2>
            <p className="mb-4 text-slate-600">
              El repositorio básico extiende de{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                JpaRepository
              </code>
              . Podemos agregar filtros adicionales aprovechando las
              convenciones de nombre de Spring Data JPA:
            </p>
            <CodeBlock
              title="CategoriaRepository.java"
              code={`package com.itsqmet.repaso1.repository;

import com.itsqmet.repaso1.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}`}
            />
            <CodeBlock
              title="ProductoRepository.java — con filtros"
              code={`package com.itsqmet.repaso1.repository;

import com.itsqmet.repaso1.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Lista de productos por categoría
    List<Producto> findByCategoriaId(Long categoriaId);
    // Lista de productos por proveedor
    List<Producto> findByProveedorId(Long proveedorId);
}`}
            />
          </section>

          {/* 6. SERVICE */}
          <section id="service" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              06. Business Logic (Service)
            </h2>
            <p className="mb-4 text-slate-600">
              La mayoría tiene el mismo CRUD básico. Aquí se puede apreciar
              también el filtrado de lista de productos por categoría y
              proveedor.
            </p>

            <div className="space-y-5 mb-6 text-sm text-slate-600">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-1">
                  1. @Transactional(readOnly = true)
                </p>
                <p>
                  Le dice a la base de datos que solo vamos a leer. Esto hace
                  que la consulta sea más rápida porque Spring no gasta recursos
                  buscando cambios para guardar.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-1">
                  2. Búsqueda Segura con .orElseThrow()
                </p>
                <p>
                  En lugar de devolver un simple nulo, lanzamos una excepción si
                  el ID no existe. Luego convertimos a DTO para que el
                  controlador nunca reciba el objeto original de la base de
                  datos.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-1">
                  3. Actualización Inteligente con MapStruct
                </p>
                <p>
                  Primero recupera la entidad real de la BD. Luego{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    mapper.actualizarDesdeDto()
                  </code>{" "}
                  vuelca los cambios. Gracias a la configuración de MapStruct,
                  si un campo en el DTO es null, <strong>no borra</strong> lo
                  que ya hay en la BD.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-1">
                  4. Flujo con Stream
                </p>
                <p>
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    findAll()
                  </code>{" "}
                  → <code className="font-mono text-slate-700">.stream()</code>{" "}
                  →{" "}
                  <code className="font-mono text-slate-700">
                    .map(mapper::toDTO)
                  </code>{" "}
                  →{" "}
                  <code className="font-mono text-slate-700">
                    .collect(Collectors.toList())
                  </code>
                  : Convierte cada entidad a DTO quitando campos sensibles.
                </p>
              </div>
            </div>

            <CodeBlock
              title="UsuarioService.java — CRUD Completo con DTOs"
              code={`@Service
public class UsuarioService {

    @Autowired private UsuarioRepository usuarioRepository;
    @Autowired private UsuarioMapper usuarioMapper;
    @Autowired private PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    public List<UsuarioDTO> listarUsuarios() {
        return usuarioRepository.findAll().stream()
            .map(usuarioMapper::toDTO)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public UsuarioDTO obtenerUsuarioPorId(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return usuarioMapper.toDTO(usuario);
    }

    @Transactional
    public UsuarioDTO crearUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioMapper.toEntity(usuarioDTO);
        // CIFRAMOS LA CONTRASEÑA AQUÍ
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        return usuarioMapper.toDTO(usuarioRepository.save(usuario));
    }

    @Transactional
    public UsuarioDTO actualizarUsuario(Long id, UsuarioDTO usuarioDTO) {
        // 1. Buscamos el usuario real
        Usuario existente = usuarioRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        // 2. MapStruct actualiza campos (null = no sobrescribe)
        usuarioMapper.actualizarDesdeDto(usuarioDTO, existente);
        // 3. Guardamos la entidad actualizada
        return usuarioMapper.toDTO(usuarioRepository.save(existente));
    }

    @Transactional
    public void eliminarUsuario(Long id) {
        if (!usuarioRepository.existsById(id)) {
            throw new RuntimeException("Usuario no encontrado");
        }
        usuarioRepository.deleteById(id);
    }
}`}
            />

            <CodeBlock
              title="ProductService.java — con filtros personalizados"
              code={`@Service
public class ProductService {
    @Autowired private ProductoRepository productoRepository;

    public List<Producto> allProductos() {
        return productoRepository.findAll();
    }

    public Optional<Producto> productoId(Long id) {
        return productoRepository.findById(id);
    }

    public Producto guardarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public void eliminarProducto(Long id) {
        productoRepository.deleteById(id);
    }

    // OBTENER LOS PRODUCTOS POR CATEGORÍA
    public List<Producto> productosCategoria(Long categoriaId) {
        return productoRepository.findByCategoriaId(categoriaId);
    }

    // OBTENER LOS PRODUCTOS POR PROVEEDOR
    public List<Producto> productosProveedor(Long proveedorId) {
        return productoRepository.findByProveedorId(proveedorId);
    }
}`}
            />
          </section>

          {/* 7. CONTROLLER */}
          <section id="controller" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              07. REST Controllers
            </h2>
            <p className="mb-4 text-slate-600">
              Los cambios clave respecto al CRUD antiguo: los métodos ahora son
              de tipo DTO, se usa{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                @Valid
              </code>{" "}
              para disparar las validaciones, y se devuelven los códigos HTTP
              correctos.
            </p>
            <CodeBlock
              title="UsuarioController.java"
              code={`@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    // Inyección por constructor (práctica recomendada)
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> crearUsuario(@Valid @RequestBody UsuarioDTO usuario) {
        // Devolvemos 201 (Created)
        return new ResponseEntity<>(usuarioService.crearUsuario(usuario), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> listarUsuarios() {
        // Devolvemos 200 (OK) explícito
        return ResponseEntity.ok(usuarioService.listarUsuarios());
    }

    @PutMapping("/{id}")
    public ResponseEntity<UsuarioDTO> actualizarUsuario(
        @PathVariable Long id,
        @Valid @RequestBody UsuarioDTO usuarioDTO) {

        UsuarioDTO actualizado = usuarioService.actualizarUsuario(id, usuarioDTO);
        // Devolvemos 200 OK con el DTO actualizado
        return ResponseEntity.ok(actualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable Long id) {
        usuarioService.eliminarUsuario(id);
        // Devolvemos 204 (No Content) porque no hay cuerpo de respuesta
        return ResponseEntity.noContent().build();
    }
}`}
            />

            <CodeBlock
              title="ProductoController.java — con filtros personalizados"
              code={`@RestController
@RequestMapping("/productos")
public class ProductoController {
    @Autowired private ProductService productService;

    @GetMapping
    public List<Producto> mostrarProductos() {
        return productService.allProductos();
    }

    @GetMapping("/{id}")
    public Optional<Producto> buscarProducto(@PathVariable Long id) {
        return productService.productoId(id);
    }

    @PostMapping
    public Producto guardarProducto(@RequestBody Producto producto) {
        return productService.guardarProducto(producto);
    }

    @PutMapping("/{id}")
    public Producto actualizarProducto(@RequestBody Producto producto, @PathVariable Long id) {
        Optional<Producto> productoOptional = productService.productoId(id);
        if (productoOptional.isPresent()) {
            Producto productoExiste = productoOptional.get();
            productoExiste.setNombre(producto.getNombre());
            productoExiste.setStock(producto.getStock());
            productoExiste.setPrecio(producto.getPrecio());
            return productService.guardarProducto(productoExiste);
        }
        return null;
    }

    @GetMapping("/categoria/{categoriaId}")
    public List<Producto> productosPorCategoria(@PathVariable Long categoriaId) {
        return productService.productosCategoria(categoriaId);
    }

    @GetMapping("/proveedor/{proveedorId}")
    public List<Producto> productosPorProveedor(@PathVariable Long proveedorId) {
        return productService.productosProveedor(proveedorId);
    }
}`}
            />
          </section>

          {/* 8. SECURITY */}
          <section id="security" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              08. Spring Security (Sin JWT, Sin Roles)
            </h2>
            <p className="mb-4 text-slate-600">
              Nuestro sistema usa <strong>Spring Security</strong> con
              autenticación basada en sesión HTTP estándar y cifrado de
              contraseñas con <strong>BCrypt</strong>. No se usan tokens JWT ni
              roles: cualquier usuario autenticado tiene acceso a los endpoints
              protegidos.
            </p>

            {/* 8.1 Entity */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-8">
              1. Entidad Usuario — Implements UserDetails
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              La entidad implementa{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                UserDetails
              </code>{" "}
              para integrarse con Spring Security. Sin roles,{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                getAuthorities()
              </code>{" "}
              devuelve una lista vacía. El email es el identificador único
              (username).
            </p>
            <CodeBlock
              title="Usuario.java"
              code={`package com.itsqmet.repaso1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    private String password;

    // Métodos de UserDetails
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Sin roles: devolvemos lista vacía
        return List.of();
    }

    @Override
    public String getUsername() {
        return email; // Usamos el email como nombre de usuario
    }

    @Override public boolean isAccountNonExpired()    { return true; }
    @Override public boolean isAccountNonLocked()     { return true; }
    @Override public boolean isCredentialsNonExpired(){ return true; }
    @Override public boolean isEnabled()              { return true; }
}`}
            />

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 text-sm text-blue-900 space-y-2 mt-4">
              <p>
                • <strong>Como @Entity</strong>: Le dice a JPA/Hibernate que
                cree una tabla con campos para id, email y password.
              </p>
              <p>
                • <strong>Como UserDetails</strong>: Le dice a Spring Security
                que esta clase contiene la información de autenticación del
                usuario.
              </p>
              <p>
                • <strong>getUsername()</strong>: Sobrescrito para devolver el
                email. Así el correo electrónico es el identificador de login.
              </p>
              <p>
                • Los métodos{" "}
                <code className="bg-blue-100 px-1 py-0.5 rounded font-mono">
                  isAccountNonExpired()
                </code>
                , etc. devuelven siempre true. En una app real podrías tener un
                campo{" "}
                <code className="bg-blue-100 px-1 py-0.5 rounded font-mono">
                  boolean activo
                </code>{" "}
                en la BD y usarlo en{" "}
                <code className="bg-blue-100 px-1 py-0.5 rounded font-mono">
                  isEnabled()
                </code>
                .
              </p>
            </div>

            {/* 8.2 ApplicationConfig */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-8">
              2. ApplicationConfig — El Motor de Autenticación
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              Esta clase define los "ladrillos" (Beans) que Spring Security
              necesita: cómo buscar al usuario y cómo cifrar su contraseña.{" "}
              <strong>Asegúrate</strong> de que en tu{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                UsuarioRepository
              </code>{" "}
              tengas el método{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                Optional&lt;Usuario&gt; findByEmail(String email)
              </code>
              .
            </p>
            <CodeBlock
              title="ApplicationConfig.java"
              code={`package com.itsqmet.repaso1.config;

import com.itsqmet.repaso1.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final UsuarioRepository usuarioRepository;

    // Cómo buscar al usuario (por email)
    @Bean
    public UserDetailsService userDetailsService() {
        return username -> usuarioRepository.findByEmail(username)
            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
    }

    // Motor que compara contraseña enviada vs hash en BD
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider =
            new DaoAuthenticationProvider(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    // Expone el AuthenticationManager para usarlo en el servicio de auth
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    // BCrypt: estándar de la industria para cifrar contraseñas
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}`}
            />

            <div className="space-y-3 mt-4 text-sm text-slate-600">
              {[
                [
                  "UserDetailsService",
                  "Toma el username (email) y lo busca en la BD. Si no existe, lanza excepción.",
                ],
                [
                  "PasswordEncoder (BCrypt)",
                  "No guarda '12345', guarda un hash irreversible. BCrypt toma la contraseña escrita, la procesa y la compara con el hash guardado.",
                ],
                [
                  "AuthenticationProvider",
                  "Une el buscador de usuarios con el cifrador de contraseñas para validar el login.",
                ],
                [
                  "AuthenticationManager",
                  "Expone el proceso de autenticación para usarlo en el AuthService cuando alguien hace login.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                >
                  <p className="font-bold text-slate-800 mb-1">{title}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>

            {/* 8.3 SecurityConfig */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              3. SecurityConfig — Las Reglas del Juego
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              Aquí decidimos qué rutas son públicas y cuáles requieren estar
              autenticado. Sin JWT, Spring Security usará las sesiones HTTP
              estándar del navegador.
            </p>
            <CodeBlock
              title="SecurityConfig.java"
              code={`package com.itsqmet.repaso1.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .csrf(csrf -> csrf.disable()) // Desactivado para APIs REST
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll() // Login y Registro son públicos
                .anyRequest().authenticated()            // Todo lo demás requiere login
            )
            .authenticationProvider(authenticationProvider);

        return http.build();
    }

    // CORS: permite llamadas desde Angular (4200) o React/Vite (5173)
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:4200", "http://localhost:5173"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}`}
            />

            <div className="space-y-3 mt-4 text-sm text-slate-600">
              {[
                [
                  "@EnableWebSecurity",
                  "Activa la seguridad web de Spring en todo el proyecto. Sin esto, el backend estaría totalmente abierto.",
                ],
                [
                  ".csrf(disable())",
                  "Desactivamos la protección CSRF. En APIs REST (especialmente cuando Angular consume el backend) no se usan cookies de sesión de la forma tradicional que requiere CSRF.",
                ],
                [
                  "/auth/** → permitAll()",
                  "Zona pública: cualquier persona puede registrarse o loguearse sin estar autenticado.",
                ],
                [
                  ".anyRequest().authenticated()",
                  "Red de seguridad: cualquier ruta nueva que crees en el futuro estará protegida por defecto.",
                ],
                [
                  "CORS",
                  "Permite que tu backend reciba llamadas desde otros puertos: Angular (4200) y React/Vite (5173).",
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

            {/* 8.4 DTOs de Auth */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              4. DTOs de Autenticación
            </h3>
            <CodeBlock
              title="AuthRequest.java & AuthResponse.java"
              code={`// Lo que el cliente envía para hacer login
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequest {
    private String email;
    private String password;
}

// Lo que el servidor responde tras un login/registro exitoso
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private Long id;
    private String email;
    // Puedes agregar más campos informativos según necesites
}`}
            />

            {/* 8.5 AuthService */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              5. AuthService — Registro y Login
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              Orquesta el flujo de entrada. El registro cifra la contraseña y
              guarda al usuario. El login valida las credenciales con el{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                AuthenticationManager
              </code>
              .
            </p>
            <CodeBlock
              title="AuthService.java"
              code={`package com.itsqmet.repaso1.service;

import com.itsqmet.repaso1.dto.AuthRequest;
import com.itsqmet.repaso1.dto.AuthResponse;
import com.itsqmet.repaso1.dto.UsuarioDTO;
import com.itsqmet.repaso1.entity.Usuario;
import com.itsqmet.repaso1.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    // REGISTRO: crea el usuario cifrando la contraseña
    @Transactional
    public AuthResponse register(UsuarioDTO request) {
        Usuario usuario = new Usuario();
        usuario.setEmail(request.getEmail());
        // CIFRAMOS LA CONTRASEÑA ANTES DE GUARDAR
        usuario.setPassword(passwordEncoder.encode(request.getPassword()));

        Usuario guardado = usuarioRepository.save(usuario);

        return new AuthResponse(guardado.getId(), guardado.getEmail());
    }

    // LOGIN: valida credenciales y devuelve datos del usuario
    @Transactional
    public AuthResponse authenticate(AuthRequest request) {
        // Si las credenciales son incorrectas, esto lanza una excepción automáticamente
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        // Si llegamos aquí, las credenciales son válidas
        var user = usuarioRepository.findByEmail(request.getEmail()).orElseThrow();
        return new AuthResponse(user.getId(), user.getEmail());
    }
}`}
            />

            <div className="space-y-3 mt-4 text-sm text-slate-600">
              {[
                [
                  "Registro",
                  "Nunca se guarda la contraseña en texto plano. BCrypt la convierte en un hash irreconocible antes de llegar al repository.save().",
                ],
                [
                  "Login con AuthenticationManager",
                  "Es la línea más importante. Si la contraseña es incorrecta o el correo no existe, lanza una excepción automáticamente y detiene el proceso.",
                ],
                [
                  "@Transactional en el Registro",
                  "Si el usuario se guarda pero algo más falla, la transacción se deshace y no quedan registros incompletos en la BD.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                >
                  <p className="font-bold text-slate-800 mb-1">{title}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>

            {/* 8.6 AuthController */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              6. AuthController — La Puerta de Entrada
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              Expone los endpoints de seguridad al mundo exterior (Postman,
              Angular, etc.).
            </p>
            <CodeBlock
              title="AuthController.java"
              code={`package com.itsqmet.repaso1.controller;

import com.itsqmet.repaso1.dto.AuthRequest;
import com.itsqmet.repaso1.dto.AuthResponse;
import com.itsqmet.repaso1.dto.UsuarioDTO;
import com.itsqmet.repaso1.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    // POST /auth/register — Crea un nuevo usuario
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody UsuarioDTO request) {
        return ResponseEntity.ok(authService.register(request));
    }

    // POST /auth/login — Valida credenciales y devuelve datos del usuario
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }
}`}
            />

            <div className="space-y-3 mt-4 text-sm text-slate-600">
              {[
                [
                  "/register",
                  "Recibe los datos del nuevo usuario (UsuarioDTO) y los pasa al servicio para cifrarlo y guardarlo.",
                ],
                [
                  "/login",
                  "Recibe email y password (AuthRequest). Si son correctos, devuelve los datos del usuario (AuthResponse). Por seguridad, siempre usa POST para que las credenciales no viajen visibles en la URL.",
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

            {/* Summary box */}
            <div className="mt-10 bg-[#6db33f]/10 border border-[#6db33f]/30 rounded-2xl p-6">
              <p className="font-bold text-slate-800 mb-3">
                {" "}
                Resumen del flujo completo
              </p>
              <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
                <li>
                  El usuario envía email + password a{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    POST /auth/register
                  </code>{" "}
                  o{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    POST /auth/login
                  </code>
                  .
                </li>
                <li>
                  Spring Security pasa por{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    ApplicationConfig
                  </code>{" "}
                  → busca el usuario por email → compara el password con BCrypt.
                </li>
                <li>
                  Si las credenciales son válidas, el servidor devuelve el{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    AuthResponse
                  </code>{" "}
                  con los datos del usuario.
                </li>
                <li>
                  Para acceder a cualquier endpoint protegido, el usuario debe
                  estar autenticado. Cualquier ruta bajo{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    /auth/**
                  </code>{" "}
                  es pública.
                </li>
              </ol>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};
