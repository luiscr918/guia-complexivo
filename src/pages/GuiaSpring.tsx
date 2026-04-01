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
              Documentación técnica esencial para el examen: Persistencia,
              Validación y Servicios REST.
            </p>
          </header>

          {/* 1. CONFIGURACIÓN */}
          <section id="config" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              01. application.properties
            </h2>
            <CodeBlock
              title="PostgreSQL Local Config"
              code={`spring.datasource.url=jdbc:postgresql://localhost:5432/nombre_db
spring.datasource.username=postgres
spring.datasource.password=tu_pass

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

# IMPORTANTE: Muestra los mensajes de @Valid en el JSON de respuesta
spring.web.error.include-message=always`}
            />
          </section>

          {/* 2. ENTIDADES */}
          <section id="entity" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              02. JPA Entities & Relations
            </h2>
            <p className="mb-4 text-slate-600 italic">
              Definición de tablas y relaciones Many-to-One.
            </p>
            <CodeBlock
              title="Categoria & Producto Entities"
              code={`@Entity
public class Categoria {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

    @OneToMany(mappedBy = "categoria")
    private List<Producto> productos;
}

@Entity
public class Producto {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Double precio;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
}`}
            />
          </section>

          {/* 3. DTO & VALIDATION */}
          <section id="dto" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              03. DTOs & Bean Validation
            </h2>
            <CodeBlock
              title="UsuarioDTO.java"
              code={`public class UsuarioDTO {
    @NotBlank(message = "El email es obligatorio")
    @Email(message = "Formato de email no válido")
    private String email;

    @NotBlank(message = "La contraseña no puede estar vacía")
    @Size(min = 8, message = "Mínimo 8 caracteres")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d).+$", 
             message = "Debe tener mayúscula, minúscula y número")
    private String password;
}`}
            />
          </section>

          {/* 4. MAPPER */}
          <section id="mapper" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              04. MapStruct Interface
            </h2>
            <CodeBlock
              title="CategoriaMapper.java"
              code={`@Mapper(componentModel = "spring")
public interface CategoriaMapper {
    CategoriaDTO toDTO(Categoria entity);
    Categoria toEntity(CategoriaDTO dto);
    
    @Mapping(target = "id", ignore = true)
    void actualizarDesdeDTO(CategoriaDTO dto, @MappingTarget Categoria entity);
}`}
            />
          </section>

          {/* 5. SERVICE */}
          <section id="service" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              05. Business Logic (Service)
            </h2>
            <CodeBlock
              title="CategoriaService.java"
              code={`@Service
public class CategoriaService {
    @Autowired private CategoriaRepository categoriaRepository;
    @Autowired private CategoriaMapper categoriaMapper;

    @Transactional(readOnly = true)
    public CategoriaDTO obtenerPorId(Long id) {
        return categoriaRepository.findById(id)
            .map(categoriaMapper::toDTO)
            .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
    }

    @Transactional
    public void eliminar(Long id) {
        if (!categoriaRepository.existsById(id)) {
            throw new RuntimeException("ID no existe");
        }
        categoriaRepository.deleteById(id);
    }
}`}
            />
          </section>

          {/* 6. CONTROLLER */}
          <section id="controller" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              06. REST Controllers
            </h2>
            <CodeBlock
              title="CategoriaController.java"
              code={`@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {
    @Autowired private CategoriaService categoriaService;

    @PostMapping
    public ResponseEntity<CategoriaDTO> crear(@Valid @RequestBody CategoriaDTO dto) {
        return new ResponseEntity<>(categoriaService.crear(dto), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        categoriaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}`}
            />
          </section>

          {/* 7. SECURITY */}
          <section id="security" className="scroll-mt-24 mb-20">
            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-[#6db33f] inline-block mb-8 font-mono">
              07. Basic Security Configuration
            </h2>
            <CodeBlock
              title="SecurityConfig.java"
              code={`@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
            .build();
    }
}`}
            />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};
