import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CodeBlock from "./CodeBlock";

export const GuiaKaty = () => {
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
              Persistencia, Validación y Servicios.
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

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                ["Project", "Maven"],
                ["Language", "Java"],
                ["Spring Boot", "4.0.1"],
                ["Group", "com.example.itsqmet"],
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
                  name: "MySQL Driver",
                  tag: "SQL",
                  tagColor: "bg-blue-100 text-blue-700",
                  desc: "Driver JDBC que permite a Java conectarse a una base de datos MySQL.",
                },
                {
                  name: "Spring Web",
                  tag: "WEB",
                  tagColor: "bg-green-100 text-green-700",
                  desc: "Construye aplicaciones web usando Spring MVC con Apache Tomcat embebido.",
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
                  desc: "Librería de anotaciones que reduce el código repetitivo (@Data, @AllArgsConstructor, @NoArgsConstructor, etc.).",
                },
                {
                  name: "Thymeleaf",
                  tag: "TEMPLATE ENGINE",
                  tagColor: "bg-green-100 text-green-700",
                  desc: "Motor de plantillas del lado del servidor para renderizar vistas HTML con Spring MVC.",
                },
                {
                  name: "Validation",
                  tag: "I/O",
                  tagColor: "bg-purple-100 text-purple-700",
                  desc: "Bean Validation con Hibernate validator. Habilita @NotBlank, @Email, @Size, etc.",
                },
                {
                  name: "Spring Boot DevTools",
                  tag: "DEVELOPER TOOLS",
                  tagColor: "bg-slate-100 text-slate-600",
                  desc: "Reinicios rápidos de la aplicación y LiveReload para desarrollo.",
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
              <p className="font-bold mb-2">
                ⚠️ Spring Security — Agregar manualmente en pom.xml
              </p>
              <p className="mb-3">
                Spring Security se agrega a mano en el{" "}
                <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">
                  pom.xml
                </code>{" "}
                después de generar el proyecto:
              </p>
              <CodeBlock
                title="pom.xml — Spring Security"
                code={`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>`}
              />
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
              title="MySQL Local Config"
              code={`spring.datasource.url=jdbc:mysql://localhost:3306/nucleo
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update`}
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

            <div className="mb-6 text-slate-600 space-y-2 text-sm">
              <p>
                • Usar las anotaciones de Lombok:{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  @Entity
                </code>
                ,{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  @Data
                </code>
                ,{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  @AllArgsConstructor
                </code>
                ,{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  @NoArgsConstructor
                </code>
                .
              </p>
              <p>
                • El tipo de dato del id siempre es objeto:{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  Long
                </code>{" "}
                en lugar de{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  long
                </code>
                .
              </p>
              <p>
                • Para la relación ManyToOne se usa{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                  @JoinColumn(name = "categoria_id")
                </code>{" "}
                para definir la llave foránea en la tabla.
              </p>
            </div>

            <CodeBlock
              title="CategoriaCurso.java"
              code={`package com.example.itsqmet.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CategoriaCurso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String descripcion;
}`}
            />

            <CodeBlock
              title="Curso.java"
              code={`package com.example.itsqmet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String duracion;
    private Double precio;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private CategoriaCurso categoriaCurso;
}`}
            />

            <CodeBlock
              title="Usuario.java"
              code={`package com.example.itsqmet.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min = 2, max = 50)
    private String nombre;

    @Column(unique = true, nullable = false)
    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Size(min = 6)
    @JsonIgnore
    private String password;

    // getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}`}
            />
          </section>

          {/* 3. VALIDACIONES */}
          <section id="validacion" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              03. Bean Validation
            </h2>
            <p className="mb-4 text-slate-600">
              Las validaciones se aplican directamente en la entidad con
              anotaciones:
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
                    ["@NotBlank", "Para strings — no puede ser vacío ni null"],
                    ["@Size(min=2, max=50)", "Controla el largo mínimo y máximo de un string"],
                    ["@Email", "Valida que el string tenga formato de email"],
                    ["@Column(unique = true)", "El valor debe ser único en la base de datos"],
                    ["@Column(nullable = false)", "No permite valores nulos en la columna"],
                    ["@JsonIgnore", "Oculta el campo en la respuesta JSON (ej: password)"],
                  ].map(([ann, use]) => (
                    <tr key={ann} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-[#6db33f] text-xs">
                        {ann}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mb-4 text-slate-600 text-sm">
              Para que las validaciones se disparen en el controlador hay que
              usar{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                @Valid
              </code>{" "}
              junto con{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                BindingResult
              </code>
              :
            </p>
            <CodeBlock
              title="Ejemplo @Valid en Controller"
              code={`@PostMapping("/registrar")
public String registrar(@Valid @ModelAttribute("usuario") Usuario usuario,
                        BindingResult result, Model model){
    if(result.hasErrors()){
        return "auth/registrar";
    }
    servicioUsuario.registrarUsuario(usuario);
    return "redirect:/login";
}`}
            />

            <p className="mb-4 mt-6 text-slate-600 text-sm">
              Y en el template Thymeleaf se muestran los errores con{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-700">
                th:errors
              </code>
              :
            </p>
            <CodeBlock
              title="Mostrar errores en Thymeleaf"
              code={`<input type="text" th:field="*{nombre}">
<p class="error"
   th:if="\${#fields.hasErrors('nombre')}"
   th:errors="*{nombre}"></p>`}
            />
          </section>

          {/* 4. REPOSITORIOS */}
          <section id="repo" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              04. Repositorios
            </h2>
            <p className="mb-4 text-slate-600">
              El repositorio extiende de{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                JpaRepository
              </code>{" "}
              y da acceso automático a métodos como{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                findAll()
              </code>
              ,{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                findById()
              </code>
              ,{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                save()
              </code>{" "}
              y{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                deleteById()
              </code>
              . En{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-slate-700">
                UsuarioRepositorio
              </code>{" "}
              se agrega un método personalizado para buscar por email.
            </p>

            <CodeBlock
              title="CategoriaCursoRepositorio.java"
              code={`package com.example.itsqmet.repository;

import com.example.itsqmet.entity.CategoriaCurso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaCursoRepositorio extends JpaRepository<CategoriaCurso, Long> {
}`}
            />

            <CodeBlock
              title="CursoRepositorio.java"
              code={`import com.example.itsqmet.entity.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoRepositorio extends JpaRepository<Curso, Long> {
}`}
            />

            <CodeBlock
              title="UsuarioRepositorio.java"
              code={`import com.example.itsqmet.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
}`}
            />
          </section>

          {/* 5. SERVICE */}
          <section id="service" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              05. Services
            </h2>
            <p className="mb-4 text-slate-600">
              Los servicios contienen la lógica de negocio e interactúan con
              los repositorios. Se inyectan con{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                @Autowired
              </code>
              . El{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                ServicioUsuario
              </code>{" "}
              cifra la contraseña con BCrypt antes de guardar.
            </p>

            <CodeBlock
              title="ServicioCategoriaCurso.java"
              code={`import com.example.itsqmet.entity.CategoriaCurso;
import com.example.itsqmet.repository.CategoriaCursoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServicioCategoriaCurso {
    @Autowired
    private CategoriaCursoRepositorio categoriaRepositorio;

    public List<CategoriaCurso> listarCategorias(){
        return categoriaRepositorio.findAll();
    }

    public Optional<CategoriaCurso> buscarCategoriaId(Long id){
        return categoriaRepositorio.findById(id);
    }

    public CategoriaCurso guardarCategoria(CategoriaCurso categoria){
        return categoriaRepositorio.save(categoria);
    }

    public void eliminarCategoria(Long id){
        categoriaRepositorio.deleteById(id);
    }
}`}
            />

            <CodeBlock
              title="ServicioCurso.java"
              code={`import com.example.itsqmet.entity.Curso;
import com.example.itsqmet.repository.CursoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServicioCurso {
    @Autowired
    private CursoRepositorio cursoRepositorio;

    public List<Curso> listarCursos(){
        return cursoRepositorio.findAll();
    }

    public Optional<Curso> buscarCursoId(Long id){
        return cursoRepositorio.findById(id);
    }

    public Curso guardarCurso(Curso curso){
        return cursoRepositorio.save(curso);
    }

    public void eliminarCurso(Long id){
        cursoRepositorio.deleteById(id);
    }
}`}
            />

            <CodeBlock
              title="ServicioUsuario.java"
              code={`import com.example.itsqmet.entity.Usuario;
import com.example.itsqmet.repository.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ServicioUsuario {

    @Autowired
    private UsuarioRepositorio usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario registrarUsuario(Usuario usuario){
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        return usuarioRepository.save(usuario);
    }

    public Usuario buscarPorEmail(String email){
        return usuarioRepository.findByEmail(email).orElse(null);
    }
}`}
            />

            <CodeBlock
              title="DetailsService.java"
              code={`import com.example.itsqmet.entity.Usuario;
import com.example.itsqmet.repository.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class DetailsService implements UserDetailsService {

    @Autowired
    private UsuarioRepositorio usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        return User.builder()
                .username(usuario.getEmail())
                .password(usuario.getPassword())
                .roles("USER")  // aunque no uses roles, Spring necesita uno
                .build();
    }
}`}
            />
          </section>

          {/* 6. CONTROLLER */}
          <section id="controller" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              06. Controllers
            </h2>
            <p className="mb-4 text-slate-600">
              Se usa{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                @Controller
              </code>{" "}
              porque las vistas las maneja Thymeleaf. El{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                Model
              </code>{" "}
              lleva los datos a la vista y{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                redirect:
              </code>{" "}
              redirige tras guardar o eliminar.
            </p>

            <CodeBlock
              title="IndexController.java"
              code={`package com.example.itsqmet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping({"/"})
    public String home() {
        return "/index";
    }
}`}
            />

            <CodeBlock
              title="CategoriaController.java"
              code={`package com.example.itsqmet.controller;

import com.example.itsqmet.entity.CategoriaCurso;
import com.example.itsqmet.service.ServicioCategoriaCurso;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@Controller
public class CategoriaController {

    @Autowired
    private ServicioCategoriaCurso servicioCategoria;

    // LISTAR
    @GetMapping("/categorias")
    public String mostrarCategorias(Model model){
        model.addAttribute("categorias", servicioCategoria.listarCategorias());
        return "/Categorias/listaCategorias";
    }

    // FORMULARIO CREAR
    @GetMapping("/formularioCategoria")
    public String formularioCategoria(Model model){
        model.addAttribute("categoria", new CategoriaCurso());
        return "/Categorias/formularioCategoria";
    }

    // GUARDAR
    @PostMapping("/guardarCategoria")
    public String crearCategoria(@Valid @ModelAttribute("categoria") CategoriaCurso categoria, BindingResult result){
        if (result.hasErrors()){
            return "/Categorias/formularioCategoria";
        }
        servicioCategoria.guardarCategoria(categoria);
        return "redirect:/categorias";
    }

    // EDITAR
    @GetMapping("/actualizarCategoria/{id}")
    public String editarCategoria(@PathVariable Long id, Model model){
        Optional<CategoriaCurso> categoria = servicioCategoria.buscarCategoriaId(id);
        model.addAttribute("categoria", categoria.get());
        return "/Categorias/formularioCategoria";
    }

    // ELIMINAR
    @GetMapping("/eliminarCategoria/{id}")
    public String eliminarCategoria(@PathVariable Long id){
        servicioCategoria.eliminarCategoria(id);
        return "redirect:/categorias";
    }
}`}
            />

            <CodeBlock
              title="CursoController.java"
              code={`package com.example.itsqmet.controller;

import com.example.itsqmet.entity.Curso;
import com.example.itsqmet.service.ServicioCategoriaCurso;
import com.example.itsqmet.service.ServicioCurso;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@Controller
public class CursoController {

    @Autowired
    private ServicioCurso servicioCurso;

    @Autowired
    private ServicioCategoriaCurso servicioCategoria;

    // LISTAR
    @GetMapping("/cursos")
    public String mostrarCursos(Model model){
        model.addAttribute("cursos", servicioCurso.listarCursos());
        return "/Cursos/listaCurso";
    }

    // FORMULARIO CREAR
    @GetMapping("/formularioCurso")
    public String formularioCurso(Model model){
        model.addAttribute("curso", new Curso());
        model.addAttribute("categorias", servicioCategoria.listarCategorias());
        return "/Cursos/Formulario";
    }

    // GUARDAR
    @PostMapping("/guardarCurso")
    public String crearCurso(@Valid @ModelAttribute("curso") Curso curso, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("categorias", servicioCategoria.listarCategorias());
            return "/Cursos/Formulario";
        }
        servicioCurso.guardarCurso(curso);
        return "redirect:/cursos";
    }

    // EDITAR
    @GetMapping("/actualizarCurso/{id}")
    public String editarCurso(@PathVariable Long id, Model model){
        Optional<Curso> curso = servicioCurso.buscarCursoId(id);
        model.addAttribute("curso", curso.get());
        model.addAttribute("categorias", servicioCategoria.listarCategorias());
        return "/Cursos/Formulario";
    }

    // ELIMINAR
    @GetMapping("/eliminarCurso/{id}")
    public String eliminarCurso(@PathVariable Long id){
        servicioCurso.eliminarCurso(id);
        return "redirect:/cursos";
    }
}`}
            />

            <CodeBlock
              title="UsuarioController.java"
              code={`package com.example.itsqmet.controller;

import com.example.itsqmet.entity.Usuario;
import com.example.itsqmet.service.ServicioUsuario;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UsuarioController {

    @Autowired
    private ServicioUsuario servicioUsuario;

    @GetMapping("/registrar")
    public String mostrarFormularioRegistro(Model model){
        model.addAttribute("usuario", new Usuario());
        return "auth/registrar";
    }

    @PostMapping("/registrar")
    public String registrar(@Valid @ModelAttribute("usuario") Usuario usuario,
                            BindingResult result, Model model){
        if(result.hasErrors()){
            return "auth/registrar";
        }
        servicioUsuario.registrarUsuario(usuario);
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String login(){
        return "auth/login";
    }
}`}
            />
          </section>

          {/* 7. SECURITY */}
          <section id="security" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              07. Spring Security
            </h2>
            <p className="mb-4 text-slate-600">
              Se usa autenticación basada en sesión HTTP con formulario de login
              propio y cifrado de contraseñas con <strong>BCrypt</strong>.
            </p>

            <CodeBlock
              title="securityConfig.java"
              code={`package com.example.itsqmet.security;

import com.example.itsqmet.service.DetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class securityConfig {

    @Autowired
    private DetailsService userDetailsService;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/registrar", "/login", "/css/**", "/js/**").permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(form -> form
                        .loginPage("/login")
                        .loginProcessingUrl("/login")   // <--- IMPORTANTE
                        .defaultSuccessUrl("/", true)
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutSuccessUrl("/login?logout")
                        .permitAll()
                )
                .userDetailsService(userDetailsService);  // <--- IMPORTANTE

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}`}
            />

            <div className="space-y-3 mt-6 text-sm text-slate-600">
              {[
                [
                  ".csrf(disable())",
                  "Desactivamos CSRF para simplificar el desarrollo con formularios Thymeleaf.",
                ],
                [
                  "/registrar, /login → permitAll()",
                  "Rutas públicas: cualquier persona puede registrarse o loguearse sin estar autenticado.",
                ],
                [
                  ".anyRequest().authenticated()",
                  "Cualquier otra ruta requiere que el usuario esté autenticado.",
                ],
                [
                  "loginProcessingUrl('/login')",
                  "URL donde Spring Security intercepta el POST del formulario de login. IMPORTANTE: debe coincidir con el action del form en login.html.",
                ],
                [
                  "defaultSuccessUrl('/', true)",
                  "Tras un login exitoso, redirige siempre al index.",
                ],
                [
                  ".userDetailsService(userDetailsService)",
                  "Le dice a Spring Security que use nuestro DetailsService para buscar al usuario por email. IMPORTANTE.",
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

            <div className="mt-10 bg-[#6db33f]/10 border border-[#6db33f]/30 rounded-2xl p-6">
              <p className="font-bold text-slate-800 mb-3">
                Resumen del flujo completo
              </p>
              <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
                <li>
                  El usuario llena el formulario en{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    /login
                  </code>{" "}
                  y hace POST.
                </li>
                <li>
                  Spring Security usa{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    DetailsService
                  </code>{" "}
                  → busca el usuario por email → compara el password con BCrypt.
                </li>
                <li>
                  Si las credenciales son válidas, redirige a{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    /
                  </code>
                  .
                </li>
                <li>
                  Para registrarse, el usuario va a{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    /registrar
                  </code>
                  . La contraseña se cifra con BCrypt en{" "}
                  <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-700">
                    ServicioUsuario
                  </code>{" "}
                  antes de guardar.
                </li>
              </ol>
            </div>
          </section>

          {/* 8. TEMPLATES */}
          <section id="templates" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              08. Templates (Thymeleaf)
            </h2>
            <p className="mb-4 text-slate-600">
              Las vistas se crean con <strong>Thymeleaf</strong>. Se usa{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                th:object
              </code>
              ,{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                th:field
              </code>
              ,{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                th:each
              </code>{" "}
              y{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                th:errors
              </code>{" "}
              para manejar datos y errores en el formulario.
            </p>

            <h3 className="text-lg font-bold text-slate-800 mb-3 mt-8">
              Auth
            </h3>

            <CodeBlock
              title="auth/login.html"
              code={`<!DOCTYPE html>
<html lang="es" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Login - EduConnect</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #eee; }
        .container { height: 100vh; display: flex; justify-content: center; align-items: center; }
        .card { background: white; padding: 20px; width: 300px; border: 1px solid #ccc; }
        h3 { text-align: center; }
        label { display: block; margin-top: 10px; }
        input { width: 100%; padding: 6px; margin-top: 4px; }
        button { width: 100%; margin-top: 15px; padding: 8px; background: #0d6efd; color: white; border: none; }
        .links { text-align: center; margin-top: 15px; }
    </style>
</head>
<body>
<div class="container">
    <div class="card">
        <h3>Iniciar Sesión</h3>
        <form th:action="@{/login}" method="post">
            <label>Email</label>
            <input type="email" name="username">
            <label>Contraseña</label>
            <input type="password" name="password">
            <button type="submit">Ingresar</button>
        </form>
        <div class="links">
            <p>¿No tienes cuenta? <a href="/registrar">Registrarte</a></p>
        </div>
    </div>
</div>
</body>
</html>`}
            />

            <CodeBlock
              title="auth/registrar.html"
              code={`<!DOCTYPE html>
<html lang="es" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Registro - EduConnect</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #eee; }
        .container { height: 100vh; display: flex; justify-content: center; align-items: center; }
        .card { background: white; padding: 20px; width: 320px; border: 1px solid #ccc; }
        h3 { text-align: center; margin-bottom: 20px; }
        label { display: block; margin-top: 10px; }
        input { width: 100%; padding: 6px; margin-top: 4px; }
        button { width: 100%; padding: 8px; margin-top: 15px; background-color: #0d6efd; color: white; border: none; }
        .error { color: red; font-size: 13px; }
        .links { text-align: center; margin-top: 15px; }
    </style>
</head>
<body>
<div class="container">
    <div class="card">
        <h3>Registro</h3>
        <form th:action="@{/registrar}" th:object="\${usuario}" method="post">
            <label>Nombre</label>
            <input type="text" th:field="*{nombre}">
            <p class="error" th:if="\${#fields.hasErrors('nombre')}" th:errors="*{nombre}"></p>

            <label>Email</label>
            <input type="email" th:field="*{email}">
            <p class="error" th:if="\${#fields.hasErrors('email')}" th:errors="*{email}"></p>

            <label>Contraseña</label>
            <input type="password" th:field="*{password}">
            <p class="error" th:if="\${#fields.hasErrors('password')}" th:errors="*{password}"></p>

            <button type="submit">Registrarse</button>
        </form>
        <div class="links">
            <p>¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
        </div>
    </div>
</div>
</body>
</html>`}
            />

            <h3 className="text-lg font-bold text-slate-800 mb-3 mt-10">
              Categorías
            </h3>

            <CodeBlock
              title="Categorias/formularioCategoria.html"
              code={`<!DOCTYPE html>
<html lang="es" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Formulario Categoría</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
<div class="container">
    <h2 class="mb-4">Formulario de Categoría</h2>
    <form th:action="@{/guardarCategoria}" th:object="\${categoria}" method="post">
        <input type="hidden" th:field="*{id}">
        <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input type="text" th:field="*{nombre}" class="form-control">
            <p class="text-danger" th:if="\${#fields.hasErrors('nombre')}" th:errors="*{nombre}"></p>
        </div>
        <div class="mb-3">
            <label class="form-label">Descripción</label>
            <input type="text" th:field="*{descripcion}" class="form-control">
            <p class="text-danger" th:if="\${#fields.hasErrors('descripcion')}" th:errors="*{descripcion}"></p>
        </div>
        <button type="submit" class="btn btn-success">Guardar</button>
        <a th:href="@{/categorias}" class="btn btn-secondary">Cancelar</a>
    </form>
</div>
</body>
</html>`}
            />

            <CodeBlock
              title="Categorias/listaCategorias.html"
              code={`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Lista de Categorías</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
<div class="container">
    <h2 class="mb-4">Lista de Categorías</h2>
    <a href="/formularioCategoria" class="btn btn-primary mb-3">Nueva Categoría</a>
    <a href="/" class="btn btn-secondary mb-3">Volver al Inicio</a>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr th:each="categoria : \${categorias}">
            <td th:text="\${categoria.id}"></td>
            <td th:text="\${categoria.nombre}"></td>
            <td th:text="\${categoria.descripcion}"></td>
            <td>
                <a th:href="@{/actualizarCategoria/{id}(id=\${categoria.id})}" class="btn btn-warning btn-sm">Editar</a>
                <a th:href="@{/eliminarCategoria/{id}(id=\${categoria.id})}" class="btn btn-danger btn-sm">Eliminar</a>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>`}
            />

            <h3 className="text-lg font-bold text-slate-800 mb-3 mt-10">
              Cursos
            </h3>

            <CodeBlock
              title="Cursos/Formulario.html"
              code={`<!DOCTYPE html>
<html lang="es" xmlns:th="http://www.thymeleaf.org">
<head>
  <meta charset="UTF-8">
  <title>Formulario Curso</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
<div class="container">
  <h2 class="mb-4">Formulario de Curso</h2>
  <form th:action="@{/guardarCurso}" th:object="\${curso}" method="post">
    <input type="hidden" th:field="*{id}"/>
    <div class="mb-3">
      <label class="form-label">Nombre:</label>
      <input type="text" th:field="*{nombre}" class="form-control"/>
    </div>
    <div class="mb-3">
      <label class="form-label">Duración:</label>
      <input type="text" th:field="*{duracion}" class="form-control"/>
    </div>
    <div class="mb-3">
      <label class="form-label">Precio:</label>
      <input type="number" step="0.01" th:field="*{precio}" class="form-control"/>
    </div>
    <div class="mb-3">
      <label class="form-label">Categoría:</label>
      <select th:field="*{categoriaCurso.id}" class="form-select">
        <option value="">-- Selecciona una categoría --</option>
        <option th:each="cat : \${categorias}"
                th:value="\${cat.id}"
                th:text="\${cat.nombre}">
        </option>
      </select>
    </div>
    <button type="submit" class="btn btn-success">Guardar</button>
    <a href="/cursos" class="btn btn-secondary">Cancelar</a>
  </form>
</div>
</body>
</html>`}
            />

            <CodeBlock
              title="Cursos/listaCurso.html"
              code={`<!DOCTYPE html>
<html lang="es" xmlns:th="http://www.thymeleaf.org">
<head>
  <meta charset="UTF-8">
  <title>Lista de Cursos</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="p-4">
<div class="container">
  <h2 class="mb-4">Lista de Cursos</h2>
  <a href="/formularioCurso" class="btn btn-primary mb-3">Nuevo Curso</a>
  <a href="/" class="btn btn-secondary mb-3">Volver al Inicio</a>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Duración</th>
      <th>Precio</th>
      <th>Categoría</th>
      <th>Acciones</th>
    </tr>
    </thead>
    <tbody>
    <tr th:each="curso : \${cursos}">
      <td th:text="\${curso.id}"></td>
      <td th:text="\${curso.nombre}"></td>
      <td th:text="\${curso.duracion}"></td>
      <td th:text="\${curso.precio}"></td>
      <td th:text="\${curso.categoriaCurso.nombre}"></td>
      <td>
        <a th:href="@{/actualizarCurso/{id}(id=\${curso.id})}" class="btn btn-warning btn-sm">Editar</a>
        <a th:href="@{/eliminarCurso/{id}(id=\${curso.id})}" class="btn btn-danger btn-sm">Eliminar</a>
      </td>
    </tr>
    </tbody>
  </table>
</div>
</body>
</html>`}
            />

            <h3 className="text-lg font-bold text-slate-800 mb-3 mt-10">
              Index
            </h3>

            <CodeBlock
              title="index.html"
              code={`<!DOCTYPE html>
<html lang="es" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>EduConnect - Inicio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
<div class="container py-5">
    <h1 class="mb-4">EduConnect</h1>
    <p class="mb-4">Sistema de gestión de cursos</p>
    <div class="d-grid gap-2 col-6 mx-auto">
        <a href="/cursos" class="btn btn-primary">📚 Ver Cursos</a>
        <a href="/categorias" class="btn btn-success">🏷️ Ver Categorías</a>
        <hr>
        <a href="/login" class="btn btn-warning" hidden>🔐 Iniciar Sesión</a>
        <a href="/registrar" class="btn btn-info" hidden>📝 Registrarse</a>
    </div>
</div>
</body>
</html>`}
            />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};