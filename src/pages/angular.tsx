import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export const GuiaAngular = () => {

    return (

        <div className="min-h-screen bg-white text-slate-800">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 lg:flex lg:gap-16">
                <Sidebar />

                <main className="flex-1 py-12 max-w-4xl">

                    <header className="mb-16">
                        <h1 className="text-5xl font-black mb-4">
                            Angular Reference
                        </h1>
                        <p className="text-xl text-slate-500">
                            Guía completa para crear aplicaciones Angular.
                        </p>
                    </header>


                    <div className="p-4">
                        <h1 className="font-bold">Descargas</h1>
                        <p>Aquí puedes descargar la app:</p>

                        <a href="/app-web.zip" download className="underline">
                            Descargar aplicación
                        </a>
                    </div>




                    {/* 00 CREACIÓN */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold mb-6">00. Crear Proyecto</h2>

                        <pre className="bg-slate-900 text-white p-4 rounded-xl">
                            {`npm install -g @angular/cli
ng new mi-app
cd mi-app
ng serve -o`}
                        </pre>
                    </section>

                    {/* 01 ESTRUCTURA */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold mb-6">01. Estructura</h2>

                        <pre className="bg-slate-900 text-white p-4 rounded-xl">
                            {`src/app/
├── pages/
├── services/
├── guards/
├── app-routing.module.ts
├── app.module.ts`}
                        </pre>
                    </section>

                    {/* 02 COMPONENTES */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold mb-6">02. Componentes</h2>

                        <pre className="bg-slate-900 text-white p-4 rounded-xl">
                            {`ng g c pages/home
ng g c pages/login
ng g c pages/descargas`}
                        </pre>
                    </section>


                    {/* 04 SERVICE */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold mb-6">04. Service</h2>

                        <pre className="bg-slate-900 text-white p-4 rounded-xl">
                            {`@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLogged = false;

  login(){ this.isLogged = true; }
  logout(){ this.isLogged = false; }
  isAuthenticated(){ return this.isLogged; }
}`}
                        </pre>
                    </section>

                    {/* 05 GUARD */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold mb-6">05. Guard</h2>

                        <pre className="bg-slate-900 text-white p-4 rounded-xl">
                            {`export const authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.isAuthenticated()) return true;

  router.navigate(['/login']);
  return false;
};`}
                        </pre>
                    </section>

                    {/* 06 ROUTING */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold mb-6">06. Routing</h2>

                        <pre className="bg-slate-900 text-white p-4 rounded-xl">
                            {`const routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'descargas',
    component: DescargasComponent,
    canActivate: [authGuard]
  }
];`}
                        </pre>
                    </section>

                    {/* 07 APP */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold mb-6">07. App</h2>

                        <pre className="bg-slate-900 text-white p-4 rounded-xl">
                            {`<router-outlet></router-outlet>`}
                        </pre>
                    </section>

                </main>
            </div>

            <Footer />
        </div>
    );
};