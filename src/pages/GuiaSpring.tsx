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

          {/* 00. DEPENDENCIAS */}
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

          {/* 01. ESTRUCTURA */}
          <section id="estructura" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              01. Estructura del Proyecto
            </h2>
            <p className="mb-6 text-slate-600">
              Estructura de paquetes recomendada para un proyecto Spring Boot
              con seguridad básica (sin JWT, sin roles). Cada paquete tiene una
              responsabilidad clara y separada.
            </p>

            <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm mb-8 overflow-x-auto">
              <pre className="text-slate-300 leading-7">{`tuproyecto/
└─ src/main/java/com/tugrupo/tuproyecto/
   ├─ config/
   │  ├─ ApplicationConfig.java   ← Beans de seguridad (BCrypt, AuthManager)
   │  └─ SecurityConfig.java      ← Reglas de rutas públicas y protegidas
   │
   ├─ controller/
   │  ├─ AuthController.java      ← POST /auth/register  POST /auth/login
   │  ├─ MascotaController.java   ← CRUD /mascotas
   │  └─ RazaController.java      ← CRUD /razas
   │
   ├─ dto/
   │  ├─ AuthRequest.java         ← { email, password } → login
   │  ├─ AuthResponse.java        ← { id, email }       ← respuesta login
   │  ├─ MascotaDTO.java
   │  ├─ RazaDTO.java
   │  └─ UsuarioDTO.java
   │
   ├─ entity/
   │  ├─ Mascota.java
   │  ├─ Raza.java
   │  └─ Usuario.java             ← implements UserDetails
   │
   ├─ mapper/
   │  ├─ MascotaMapper.java
   │  ├─ RazaMapper.java
   │  └─ UsuarioMapper.java
   │
   ├─ repository/
   │  ├─ MascotaRepository.java
   │  ├─ RazaRepository.java
   │  └─ UsuarioRepository.java   ← debe tener findByEmail()
   │
   └─ service/
      ├─ AuthService.java         ← register() + authenticate()
      ├─ MascotaService.java
      ├─ RazaService.java
      └─ UsuarioService.java`}</pre>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              {[
                [
                  "config/",
                  "Paquete que le falta al proyecto incompleto. Aquí van ApplicationConfig (define BCrypt, UserDetailsService, AuthenticationManager) y SecurityConfig (define qué rutas son públicas).",
                ],
                [
                  "entity/Usuario.java",
                  "A diferencia de las otras entidades, Usuario debe implementar UserDetails para integrarse con Spring Security. Sin roles, getAuthorities() devuelve List.of().",
                ],
                [
                  "repository/UsuarioRepository",
                  "Debe tener el método Optional<Usuario> findByEmail(String email) para que Spring Security pueda buscar al usuario durante el login.",
                ],
                [
                  "service/AuthService",
                  "Servicio que orquesta el registro (cifra la contraseña con BCrypt y guarda) y el login (valida con AuthenticationManager).",
                ],
                [
                  "controller/AuthController",
                  "Expone POST /auth/register y POST /auth/login. Estas rutas deben estar en permitAll() en el SecurityConfig.",
                ],
              ].map(([folder, desc]) => (
                <div
                  key={folder}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3"
                >
                  <code className="text-[#6db33f] font-bold font-mono text-xs whitespace-nowrap pt-0.5">
                    {folder}
                  </code>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 02. CONFIGURACIÓN */}
          <section id="config" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              02. application.properties
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
              code={`spring.application.name=tuproyecto
# 1. Conexión a la Base de Datos (PostgreSQL Local)
# Cambia 'nombre_de_tu_bd' por el nombre que creaste en pgAdmin
spring.datasource.url=jdbc:postgresql://localhost:5432/nombre_de_tu_bd
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

          {/* 03. ENTIDADES */}
          <section id="entity" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              03. JPA Entities & Relations
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
              code={`@OneToMany(mappedBy = "raza", cascade = CascadeType.ALL, orphanRemoval = true)
private List<Mascota> mascotas;`}
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
              title="Raza.java & Mascota.java — Entidades de ejemplo"
              code={`@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Raza {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;

    // Lado "1": NO se pone la lista en el DTO
    @OneToMany(mappedBy = "raza", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Mascota> mascotas;
}

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Mascota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Integer edad;
    private String sexo;
    private Double peso;

    // Lado "N": aquí va la llave foránea
    @ManyToOne
    @JoinColumn(name = "codigo_raza")
    private Raza raza;
}

// Para atributos de tipo fecha:
@JsonFormat(pattern = "yyyy-MM-dd")
@DateTimeFormat(pattern = "yyyy-MM-dd")
private Date fecha;`}
            />
          </section>

          {/* 04. DTOs */}
          <section id="dto" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              04. DTOs & Bean Validation
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

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 text-sm text-blue-900 space-y-2">
              <p>
                <strong>Maneja las relaciones en los DTOs:</strong>
              </p>
              <p>
                • Si es el lado <strong>"1"</strong> (ej. Raza):{" "}
                <strong>No pongas la lista</strong> de mascotas en el DTO.
              </p>
              <p>
                • Si es el lado <strong>"N"</strong> (ej. Mascota): Pon el{" "}
                <strong>ID</strong> y un campo descriptivo (nombre) del padre.
              </p>
            </div>

            <CodeBlock
              title="RazaDTO.java & MascotaDTO.java"
              code={`// Lado "1" → sin lista
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RazaDTO {
    private Long id;
    private String nombre;
    private String descripcion;
}

// Lado "N" → con id del padre y campo descriptivo
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MascotaDTO {
    private Long id;
    private String nombre;
    private Integer edad;
    private String sexo;
    private Double peso;
    private Long id_raza;          // ID del padre
    private String nombre_raza;    // Campo descriptivo del padre
}`}
            />

            <CodeBlock
              title="UsuarioDTO.java — con @JsonProperty"
              code={`@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
    private Long id;

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "Formato de email no válido")
    private String email;

    // WRITE_ONLY: el cliente lo envía, pero la API no lo devuelve
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
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
              code={`public enum TipoSexo {
    MACHO,
    HEMBRA
}

// En la entidad:
@Enumerated(EnumType.STRING)
private TipoSexo sexo;`}
            />
          </section>

          {/* 05. MAPPER */}
          <section id="mapper" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              05. MapStruct Interface
            </h2>
            <p className="mb-4 text-slate-600">
              Para mapear desde DTO a Entity hay que agregar las dependencias de
              MapStruct en el{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                pom.xml
              </code>
              , luego crear una interfaz en un nuevo paquete{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                com.tugrupo.tuproyecto.mapper
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
              title="RazaMapper.java — Entidad sin relación anidada"
              code={`@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface RazaMapper {
    // Entidad a DTO (campos iguales → mapeo automático)
    RazaDTO toDto(Raza raza);

    // DTO a Entidad (ignoramos la lista de mascotas)
    @Mapping(target = "mascotas", ignore = true)
    Raza toEntity(RazaDTO razaDTO);

    // Para actualizar (PUT): ignoramos id y lista
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "mascotas", ignore = true)
    void actualizarDesdeDTO(RazaDTO dto, @MappingTarget Raza raza);
}`}
            />

            <CodeBlock
              title="MascotaMapper.java — Entidad con relación (aplanamiento)"
              code={`@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface MascotaMapper {
    // Entidad a DTO: "aplanamos" el objeto Raza
    @Mapping(source = "raza.id",     target = "id_raza")
    @Mapping(source = "raza.nombre", target = "nombre_raza")
    MascotaDTO toDto(Mascota mascota);

    // DTO a Entidad: ignoramos raza (la asignamos manualmente en el Service)
    @Mapping(target = "raza", ignore = true)
    Mascota toEntity(MascotaDTO mascotaDTO);

    // Para actualizar (PUT)
    @Mapping(target = "id",   ignore = true)
    @Mapping(target = "raza", ignore = true)
    void actualizarDesdeDTO(MascotaDTO dto, @MappingTarget Mascota mascota);
}`}
            />

            <div className="space-y-5 mt-6 text-sm text-slate-600">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-2">
                  @Mapper — Configuración
                </p>
                <p>
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    componentModel = "spring"
                  </code>
                  : Crea un bean → puedes usar{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    @Autowired
                  </code>{" "}
                  en el Service.{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    IGNORE
                  </code>
                  : los campos null del DTO <strong>no borran</strong> lo que
                  hay en la BD.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-2">
                  toDto — Aplanamiento
                </p>
                <p>
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    source = "raza.id"
                  </code>{" "}
                  entra al objeto{" "}
                  <code className="font-mono text-slate-700">raza</code> y saca
                  su <code className="font-mono text-slate-700">id</code>. Los
                  campos con el mismo nombre se mapean{" "}
                  <strong>automáticamente</strong>.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-2">
                  toEntity — ignore = true en relaciones
                </p>
                <p>
                  El DTO solo trae el{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    id_raza
                  </code>{" "}
                  (un número). La entidad necesita un objeto{" "}
                  <code className="font-mono text-slate-700">Raza</code>{" "}
                  completo. Al ignorarlo, tú buscas la raza real en la BD dentro
                  del <strong>Service</strong> y la asignas manualmente.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="font-bold text-slate-800 mb-2">
                  actualizarDesdeDTO — El Parche (PUT)
                </p>
                <p>
                  <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                    @MappingTarget
                  </code>{" "}
                  le dice a MapStruct que no cree un objeto nuevo, sino que
                  modifique la entidad ya existente. Los campos en{" "}
                  <code className="font-mono text-slate-700">ignore=true</code>{" "}
                  <strong>nunca</strong> se actualizarán.
                </p>
              </div>
            </div>
          </section>

          {/* 06. REPOSITORIOS */}
          <section id="repo" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              06. Repositorios
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
              title="RazaRepository.java"
              code={`package com.tugrupo.tuproyecto.repository;

import com.tugrupo.tuproyecto.entity.Raza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RazaRepository extends JpaRepository<Raza, Long> {
}`}
            />
            <CodeBlock
              title="MascotaRepository.java — con filtros"
              code={`package com.tugrupo.tuproyecto.repository;

import com.tugrupo.tuproyecto.entity.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MascotaRepository extends JpaRepository<Mascota, Long> {
    // Filtro por raza
    List<Mascota> findByRazaId(Long razaId);
}`}
            />
            <CodeBlock
              title="UsuarioRepository.java — findByEmail obligatorio para Security"
              code={`package com.tugrupo.tuproyecto.repository;

import com.tugrupo.tuproyecto.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // OBLIGATORIO para Spring Security: busca el usuario por email durante el login
    Optional<Usuario> findByEmail(String email);
}`}
            />
          </section>

          {/* 07. SERVICE */}
          <section id="service" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              07. Business Logic (Service)
            </h2>
            <p className="mb-4 text-slate-600">
              La mayoría tiene el mismo CRUD básico con DTOs y MapStruct.
            </p>

            <div className="space-y-5 mb-6 text-sm text-slate-600">
              {[
                [
                  "@Transactional(readOnly = true)",
                  "Para operaciones de solo lectura. Spring no gasta recursos buscando cambios para guardar.",
                ],
                [
                  ".orElseThrow()",
                  "En lugar de devolver null, lanzamos una excepción si el ID no existe.",
                ],
                [
                  "actualizarDesdeDTO(dto, existe)",
                  "MapStruct vuelca los cambios sobre la entidad real. Si un campo del DTO es null, no borra lo que hay en la BD.",
                ],
                [
                  ".stream().map(mapper::toDto).collect(...)",
                  "Convierte cada entidad a DTO quitando campos sensibles como la contraseña.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5"
                >
                  <p className="font-bold text-slate-800 mb-1 font-mono text-xs">
                    {title}
                  </p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>

            <CodeBlock
              title="RazaService.java — CRUD completo"
              code={`@Service
public class RazaService {
    @Autowired private RazaRepository razaRepository;
    @Autowired private RazaMapper razaMapper;

    @Transactional(readOnly = true)
    public List<RazaDTO> listarRazas() {
        return razaRepository.findAll().stream()
            .map(razaMapper::toDto)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public RazaDTO buscarRazaId(Long id) {
        Raza raza = razaRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Raza no encontrada"));
        return razaMapper.toDto(raza);
    }

    @Transactional
    public RazaDTO guardarRaza(RazaDTO razaDTO) {
        Raza raza = razaMapper.toEntity(razaDTO);
        return razaMapper.toDto(razaRepository.save(raza));
    }

    @Transactional
    public RazaDTO actualizarRaza(Long id, RazaDTO razaDTO) {
        Raza existe = razaRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Raza no encontrada"));
        razaMapper.actualizarDesdeDTO(razaDTO, existe);
        return razaMapper.toDto(razaRepository.save(existe));
    }

    @Transactional
    public void borrarRaza(Long id) {
        if (!razaRepository.existsById(id)) {
            throw new RuntimeException("Raza no encontrada");
        }
        razaRepository.deleteById(id);
    }
}`}
            />

            <CodeBlock
              title="MascotaService.java — con asignación manual de relación"
              code={`@Service
public class MascotaService {
    @Autowired private MascotaRepository mascotaRepository;
    @Autowired private RazaRepository razaRepository;
    @Autowired private MascotaMapper mascotaMapper;

    @Transactional(readOnly = true)
    public List<MascotaDTO> listarMascotas() {
        return mascotaRepository.findAll().stream()
            .map(mascotaMapper::toDto)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public MascotaDTO buscarMascotaId(Long id) {
        Mascota mascota = mascotaRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Mascota no encontrada"));
        return mascotaMapper.toDto(mascota);
    }

    @Transactional
    public MascotaDTO crearMascota(MascotaDTO mascotaDTO) {
        Mascota mascota = mascotaMapper.toEntity(mascotaDTO);
        // Asignación manual de la relación (porque MapStruct la ignora)
        if (mascotaDTO.getId_raza() != null) {
            Raza raza = razaRepository.findById(mascotaDTO.getId_raza())
                .orElseThrow(() -> new RuntimeException("Raza no encontrada"));
            mascota.setRaza(raza);
        }
        return mascotaMapper.toDto(mascotaRepository.save(mascota));
    }

    @Transactional
    public MascotaDTO actualizarMascota(Long id, MascotaDTO mascotaDTO) {
        Mascota existe = mascotaRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Mascota no encontrada"));
        mascotaMapper.actualizarDesdeDTO(mascotaDTO, existe);
        // Actualizamos la relación si viene un nuevo id_raza
        if (mascotaDTO.getId_raza() != null) {
            Raza raza = razaRepository.findById(mascotaDTO.getId_raza())
                .orElseThrow(() -> new RuntimeException("Raza no encontrada"));
            existe.setRaza(raza);
        }
        return mascotaMapper.toDto(mascotaRepository.save(existe));
    }

    @Transactional
    public void eliminarMascota(Long id) {
        if (!mascotaRepository.existsById(id)) {
            throw new RuntimeException("Mascota no encontrada");
        }
        mascotaRepository.deleteById(id);
    }
}`}
            />

            <CodeBlock
              title="UsuarioService.java — cifra la contraseña al crear"
              code={`@Service
public class UsuarioService {
    @Autowired private UsuarioRepository usuarioRepository;
    @Autowired private UsuarioMapper usuarioMapper;
    @Autowired private PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    public List<UsuarioDTO> listarUsuarios() {
        return usuarioRepository.findAll().stream()
            .map(usuarioMapper::toDto)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public UsuarioDTO buscarUsuarioId(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return usuarioMapper.toDto(usuario);
    }

    @Transactional
    public UsuarioDTO guardarUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioMapper.toEntity(usuarioDTO);
        // CIFRAMOS LA CONTRASEÑA ANTES DE GUARDAR
        usuario.setPassword(passwordEncoder.encode(usuarioDTO.getPassword()));
        return usuarioMapper.toDto(usuarioRepository.save(usuario));
    }

    @Transactional
    public UsuarioDTO actualizarUsuario(Long id, UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        usuarioMapper.actualizarDesdeDTO(usuarioDTO, usuario);
        return usuarioMapper.toDto(usuarioRepository.save(usuario));
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
          </section>

          {/* 08. CONTROLLER */}
          <section id="controller" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              08. REST Controllers
            </h2>
            <p className="mb-4 text-slate-600">
              Los métodos son de tipo DTO, se usa{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                @Valid
              </code>{" "}
              para disparar las validaciones y se devuelven los códigos HTTP
              correctos.
            </p>

            <CodeBlock
              title="RazaController.java"
              code={`@RestController
@RequestMapping("/razas")
public class RazaController {
    @Autowired private RazaService razaService;

    @GetMapping
    public ResponseEntity<List<RazaDTO>> listarRazas() {
        return ResponseEntity.ok(razaService.listarRazas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RazaDTO> buscarRazaId(@PathVariable Long id) {
        return ResponseEntity.ok(razaService.buscarRazaId(id));
    }

    @PostMapping
    public ResponseEntity<RazaDTO> crearRaza(@Valid @RequestBody RazaDTO razaDTO) {
        return new ResponseEntity<>(razaService.guardarRaza(razaDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RazaDTO> actualizarRaza(
        @Valid @RequestBody RazaDTO razaDTO, @PathVariable Long id) {
        return ResponseEntity.ok(razaService.actualizarRaza(id, razaDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarRaza(@PathVariable Long id) {
        razaService.borrarRaza(id);
        return ResponseEntity.noContent().build();
    }
}`}
            />

            <CodeBlock
              title="MascotaController.java"
              code={`@RestController
@RequestMapping("/mascotas")
public class MascotaController {
    @Autowired private MascotaService mascotaService;

    @GetMapping
    public ResponseEntity<List<MascotaDTO>> listarMascotas() {
        return ResponseEntity.ok(mascotaService.listarMascotas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MascotaDTO> buscarMascotaId(@PathVariable Long id) {
        return ResponseEntity.ok(mascotaService.buscarMascotaId(id));
    }

    @PostMapping
    public ResponseEntity<MascotaDTO> crearMascota(@Valid @RequestBody MascotaDTO mascotaDTO) {
        return new ResponseEntity<>(mascotaService.crearMascota(mascotaDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MascotaDTO> actualizarMascota(
        @Valid @RequestBody MascotaDTO mascotaDTO, @PathVariable Long id) {
        return ResponseEntity.ok(mascotaService.actualizarMascota(id, mascotaDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarMascota(@PathVariable Long id) {
        mascotaService.eliminarMascota(id);
        return ResponseEntity.noContent().build();
    }
}`}
            />
          </section>

          {/* 09. SECURITY */}
          <section id="security" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              09. Spring Security (Sin JWT, Sin Roles)
            </h2>
            <p className="mb-4 text-slate-600">
              Nuestro sistema usa <strong>Spring Security</strong> con cifrado
              de contraseñas <strong>BCrypt</strong>.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 mb-8 space-y-1">
              <p className="font-bold">📁 Archivos que hay que crear:</p>
              <p>
                •{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  config/ApplicationConfig.java
                </code>
              </p>
              <p>
                •{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  config/SecurityConfig.java
                </code>
              </p>
              <p>
                •{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  dto/AuthRequest.java
                </code>
              </p>
              <p>
                •{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  dto/AuthResponse.java
                </code>
              </p>
              <p>
                •{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  service/AuthService.java
                </code>
              </p>
              <p>
                •{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  controller/AuthController.java
                </code>
              </p>
              <p>
                • Modificar{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  entity/Usuario.java
                </code>{" "}
                → implementar UserDetails
              </p>
              <p>
                • Agregar{" "}
                <code className="bg-amber-100 px-1 rounded font-mono">
                  findByEmail()
                </code>{" "}
                en UsuarioRepository
              </p>
            </div>

            {/* 9.1 Entity */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-8">
              1. Entidad Usuario — Implements UserDetails
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              La entidad debe implementar{" "}
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
              title="entity/Usuario.java"
              code={`package com.tugrupo.tuproyecto.entity;

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
        return List.of(); // Sin roles: lista vacía
    }

    @Override
    public String getUsername() {
        return email; // Usamos el email como identificador
    }

    @Override public boolean isAccountNonExpired()    { return true; }
    @Override public boolean isAccountNonLocked()     { return true; }
    @Override public boolean isCredentialsNonExpired(){ return true; }
    @Override public boolean isEnabled()              { return true; }
}`}
            />

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 text-sm text-blue-900 space-y-2 mt-4">
              <p>
                • <strong>implements UserDetails</strong>: Le dice a Spring
                Security que esta clase contiene la información de
                autenticación.
              </p>
              <p>
                • <strong>getUsername()</strong>: Sobrescrito para devolver el
                email, que será el identificador de login.
              </p>
              <p>
                • Los métodos{" "}
                <code className="bg-blue-100 px-1 py-0.5 rounded font-mono">
                  isAccountNonExpired()
                </code>
                , etc. devuelven siempre{" "}
                <code className="bg-blue-100 px-1 py-0.5 rounded font-mono">
                  true
                </code>
                . En una app real usarías un campo{" "}
                <code className="bg-blue-100 px-1 py-0.5 rounded font-mono">
                  boolean activo
                </code>{" "}
                en la BD.
              </p>
            </div>

            {/* 9.2 ApplicationConfig */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-8">
              2. ApplicationConfig — El Motor de Autenticación
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              Define los "ladrillos" (Beans) que Spring Security necesita: cómo
              buscar al usuario y cómo cifrar su contraseña.
            </p>
            <CodeBlock
              title="config/ApplicationConfig.java"
              code={`package com.tugrupo.tuproyecto.config;

import com.tugrupo.tuproyecto.repository.UsuarioRepository;
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

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> usuarioRepository.findByEmail(username)
            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider =
            new DaoAuthenticationProvider(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
        throws Exception {
        return config.getAuthenticationManager();
    }

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
                  "Toma el email y lo busca en la BD con findByEmail(). Si no existe, lanza excepción y detiene el login.",
                ],
                [
                  "PasswordEncoder (BCrypt)",
                  "No guarda '12345', guarda un hash irreversible. Cada vez que alguien hace login, BCrypt compara la contraseña escrita con el hash guardado.",
                ],
                [
                  "AuthenticationProvider",
                  "Une el buscador de usuarios con el cifrador de contraseñas para validar el login.",
                ],
                [
                  "AuthenticationManager",
                  "Expone el proceso de autenticación para usarlo en el AuthService.",
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

            {/* 9.3 SecurityConfig */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              3. SecurityConfig — Las Reglas del Juego
            </h3>
            <p className="mb-4 text-slate-600 text-sm">
              Aquí decidimos qué rutas son públicas y cuáles requieren
              autenticación.
            </p>
            <CodeBlock
              title="config/SecurityConfig.java"
              code={`package com.tugrupo.tuproyecto.config;

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
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll() // ← rutas públicas
                .anyRequest().authenticated()            // ← todo lo demás requiere login
            )
            .authenticationProvider(authenticationProvider);

        return http.build();
    }

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
                  "Activa la seguridad en todo el proyecto. Sin esto, el backend queda completamente abierto.",
                ],
                [
                  ".csrf(disable())",
                  "Desactivado para APIs REST. Las APIs con frontend separado no necesitan protección CSRF.",
                ],
                [
                  "/auth/** → permitAll()",
                  "Zona pública: cualquier persona puede registrarse o loguearse sin estar autenticado.",
                ],
                [
                  ".anyRequest().authenticated()",
                  "Cualquier ruta nueva que crees estará protegida por defecto.",
                ],
                [
                  "CORS",
                  "Permite llamadas desde Angular (4200) o React/Vite (5173).",
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

            {/* 9.4 DTOs Auth */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              4. DTOs de Autenticación
            </h3>
            <CodeBlock
              title="dto/AuthRequest.java & dto/AuthResponse.java"
              code={`// Lo que el cliente envía para hacer login
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequest {
    private String email;
    private String password;
}

// Lo que el servidor responde tras login/registro exitoso
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private Long id;
    private String email;
}`}
            />

            {/* 9.5 AuthService */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              5. AuthService — Registro y Login
            </h3>
            <CodeBlock
              title="service/AuthService.java"
              code={`package com.tugrupo.tuproyecto.service;

import com.tugrupo.tuproyecto.dto.AuthRequest;
import com.tugrupo.tuproyecto.dto.AuthResponse;
import com.tugrupo.tuproyecto.dto.UsuarioDTO;
import com.tugrupo.tuproyecto.entity.Usuario;
import com.tugrupo.tuproyecto.repository.UsuarioRepository;
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
        usuario.setPassword(passwordEncoder.encode(request.getPassword()));
        Usuario guardado = usuarioRepository.save(usuario);
        return new AuthResponse(guardado.getId(), guardado.getEmail());
    }

    // LOGIN: valida credenciales
    @Transactional
    public AuthResponse authenticate(AuthRequest request) {
        // Si las credenciales son incorrectas lanza excepción automáticamente
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        var user = usuarioRepository.findByEmail(request.getEmail()).orElseThrow();
        return new AuthResponse(user.getId(), user.getEmail());
    }
}`}
            />

            {/* 9.6 AuthController */}
            <h3 className="text-lg font-bold text-slate-800 mb-4 mt-10">
              6. AuthController — La Puerta de Entrada
            </h3>
            <CodeBlock
              title="controller/AuthController.java"
              code={`package com.tugrupo.tuproyecto.controller;

import com.tugrupo.tuproyecto.dto.AuthRequest;
import com.tugrupo.tuproyecto.dto.AuthResponse;
import com.tugrupo.tuproyecto.dto.UsuarioDTO;
import com.tugrupo.tuproyecto.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    // POST /auth/register
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody UsuarioDTO request) {
        return ResponseEntity.ok(authService.register(request));
    }

    // POST /auth/login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }
}`}
            />

            {/* Summary */}
            <div className="mt-10 bg-[#6db33f]/10 border border-[#6db33f]/30 rounded-2xl p-6">
              <p className="font-bold text-slate-800 mb-3">
                🔐 Resumen del flujo completo
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
                  Spring Security usa{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    ApplicationConfig
                  </code>{" "}
                  → busca al usuario por email (
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    findByEmail
                  </code>
                  ) → compara el password con BCrypt.
                </li>
                <li>
                  Si las credenciales son válidas, el servidor devuelve el{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    AuthResponse
                  </code>{" "}
                  con id y email.
                </li>
                <li>
                  Para acceder a cualquier endpoint protegido el usuario debe
                  estar autenticado. Solo las rutas bajo{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    /auth/**
                  </code>{" "}
                  son públicas.
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
