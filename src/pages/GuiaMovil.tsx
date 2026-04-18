import React from "react";
import Navbar from "../components/Navbar";
import SidebarMobile from "../components/SiderMobile";

const CodeBlock = ({ children }: any) => (
  <pre className="bg-slate-100 text-slate-800 text-sm p-4 rounded-xl overflow-x-auto border border-slate-300">
    <code>{children}</code>
  </pre>
);
const GuiaMovil: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex max-w-7xl mx-auto">
        <SidebarMobile />

        <main className="flex-1 px-8 py-10">

          {/* HEADER */}
          <h1 className="text-4xl font-black text-slate-900 mb-2">
            Mobile App Reference
          </h1>
          <p className="text-slate-600 mb-10">
            Documentación técnica esencial para crear una aplicación móvil con React Native, navegación y Firebase.
          </p>

          {/* 00 DEPENDENCIAS */}
          <section id="dependencias" className="mb-16">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              00. Dependencias
            </h2>

            <CodeBlock>
{`npx create-expo-app -t

npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack    
npx expo install react-native-gesture-handler @react-native-masked-view/masked-view
npm install @react-navigation/drawer   
npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
npx expo install react-dom react-native-web
npm install firebase
extensiones necesarias
IntelliSense
ES7 Snippets
Prettier
Tailwind IntelliSense
Path Intellisense
Material Icon Theme
Tabnine AI Autocomplete
`}
            </CodeBlock>
          </section>

          {/* 01 ESTRUCTURA */}
          <section id="estructura" className="mb-16">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              01. Estructura del Proyecto
            </h2>

            <CodeBlock>
{`tuproyecto/
├─ App.tsx
├─ navigations/
│  └─ MainNavigator.tsx
├─ screens/
│  ├─ LoginScreen.tsx
│  ├─ RegisterScreen.tsx
│  ├─ ListaScreen.tsx
│  ├─ GuardarScreen.tsx
│  ├─ NotasScreen.tsx
│  ├─ InformacionScreen.tsx
│  ├─ EditarScreen.tsx
│  └─ EliminarScreen.tsx
├─ components/
│  └─ Tarjeta.tsx
└─ firebase/
   └─ Config.tsx`}
            </CodeBlock>
          </section>

          {/* 02 NAVEGACION */}
          <section id="navigation" className="mb-16">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              02. Navegación
            </h2>

            <CodeBlock>
{`import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListaScreen from '../screens/ListaScreen';
import GuardarScreen from '../screens/GuardarScreen';
import NotasScreen from '../screens/NotasScreen';
import { NavigationContainer } from '@react-navigation/native';
import InformacionScreen from '../screens/InformacionScreen';
import EditarScreen from '../screens/EditarScreen';
import EliminarScreen from '../screens/EliminarScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegisterScreen} />
            <Stack.Screen name="Drawer" component={MyDrawer} />
        </Stack.Navigator>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Lista" component={ListaScreen} />
            <Drawer.Screen name="Guardar" component={GuardarScreen} />
            <Drawer.Screen name="Notas" component={NotasScreen} />
            <Drawer.Screen name="Informacion" component={InformacionScreen} />
            <Drawer.Screen name="Editar" component={EditarScreen} />
            <Drawer.Screen name="Eliminar" component={EliminarScreen} />
        </Drawer.Navigator>
    );
}

export function Navegador() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}`}
            </CodeBlock>
          </section>

          {/* 03 FIREBASE */}
          <section id="firebase" className="mb-16">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              03. Firebase Config
            </h2>

            <CodeBlock>
{`import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDFyqsO3TDxkUDx977K5RqTRI4hx1bva5U",
  authDomain: "mov3-f.firebaseapp.com",
  databaseURL: "https://mov3-f-default-rtdb.firebaseio.com",
  projectId: "mov3-f",
  storageBucket: "mov3-f.firebasestorage.app",
  messagingSenderId: "362008093276",
  appId: "1:362008093276:web:2433605bfb4f11e3effc99"
};

const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const database = getDatabase(app);
`}
            </CodeBlock>
          </section>

          {/* 04 SCREENS */}
<section id="screens" className="mb-16">
  <h2 className="text-2xl font-bold mb-4 border-b pb-2">
    04. Screens
  </h2>

  {/* LOGIN */}
  <h3 className="font-semibold mt-6 mb-2">LoginScreen.tsx</h3>
  <CodeBlock>
{`import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Config';

export default function LoginScreen({navigation}: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigation.navigate('Drawer');
        })
        .catch((error) => {
            alert(error.message);
        });
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput 
        placeholder='Ingrese Correo'  
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput 
        placeholder='Ingrese Contraseña' 
        onChangeText={setPassword} 
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.boton}>
        <Button title='Ingresar' onPress={login}/>
      </View>
      
      <View style={styles.boton}>
        <Button 
          title='Registrarse' 
          onPress={()=> navigation.navigate('Registro')}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  boton: {
    marginTop: 10
  }
})
`}
  </CodeBlock>

  {/* REGISTER */}
  <h3 className="font-semibold mt-6 mb-2">RegisterScreen.tsx</h3>
  <CodeBlock>
{`import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../firebase/Config';
import { ref, set } from 'firebase/database';

export default function RegisterScreen({navigation}: any) {

  const [nombre, setNombre] = useState('');
  const [email, setemail] = useState('');
  const [edad, setEdad] = useState('');
  const [password, setpassword] = useState('');

  function register(){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
      const user = userCredential.user;
      guardarUsuario(user.uid);
      navigation.navigate('Login');
    })
    .catch((error) => {
      alert(error.message);
    });
  }

  function guardarUsuario(uid: string){
    set(ref(database, 'usuarios/' + uid + '/datos'), {
      nombre: nombre,
      email: email,
      edad: edad,
      password: password
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>

      <TextInput 
        placeholder='Ingrese Nombre' 
        onChangeText={setNombre} 
        style={styles.input}
      />

      <TextInput 
        placeholder='Ingrese Edad' 
        onChangeText={setEdad} 
        keyboardType='numeric'
        style={styles.input}
      />

      <TextInput 
        placeholder='Ingrese Correo' 
        onChangeText={setemail}
        style={styles.input}
      />

      <TextInput 
        placeholder='Ingrese Contraseña' 
        onChangeText={setpassword} 
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.boton}>
        <Button title='Registrar' onPress={register}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  boton: {
    marginTop: 10
  }
});
`}
  </CodeBlock>
  {/* GUARDAR */}
  <h3 className="font-semibold mt-6 mb-2">GuardarScreen.tsx</h3>
  <CodeBlock>
{`import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { auth, database } from '../firebase/Config'
import { push, ref, set } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'

export default function GuardarScreen() {

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [fecha, setFecha] = useState('')

  function guardarNota() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const notasRef = ref(database, 'usuarios/' + uid + '/notas');

        const nuevaNotaRef = push(notasRef);

        set(nuevaNotaRef, {
          nombre: nombre,
          descripcion: descripcion,
          fecha: fecha
        });

        setNombre('');
        setDescripcion('');
        setFecha('');

        alert("Nota guardada correctamente");

      } else {
        alert("No hay usuario logueado");
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Guardar Nota</Text>

      <TextInput
        placeholder="Nombre de la nota"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        style={styles.input}
      />

      <TextInput
        placeholder="Fecha"
        value={fecha}
        onChangeText={setFecha}
        style={styles.input}
      />

      <Button title="Guardar" onPress={guardarNota} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  }
})
`}
  </CodeBlock>

  {/* EDITAR */}
  <h3 className="font-semibold mt-6 mb-2">EditarScreen.tsx</h3>
  <CodeBlock>
{`import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { auth, database } from '../firebase/Config'
import { ref, set, get, child } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'

export default function EditarScreen() {

    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fecha, setFecha] = useState('')

    function buscarNota() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                get(child(ref(database), 'usuarios/' + uid + '/notas/' + id))
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            const data = snapshot.val()

                            setNombre(data.nombre)
                            setDescripcion(data.descripcion)
                            setFecha(data.fecha)
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { auth, database } from '../firebase/Config'
import { ref, set, get, child } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'

export default function EditarScreen() {

    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fecha, setFecha] = useState('')

    function buscarNota() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                get(child(ref(database), 'usuarios/' + uid + '/notas/' + id))
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            const data = snapshot.val()

                            setNombre(data.nombre)
                            setDescripcion(data.descripcion)
                            setFecha(data.fecha)

                            alert("Nota cargada")
                        } else {
                            alert("No existe la nota")
                        }
                    })

            } else {
                alert("No hay usuario logueado")
            }
        })
    }

    function editarNota() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                const notaRef = ref(database, 'usuarios/' + uid + '/notas/' + id)

                set(notaRef, {
                    nombre: nombre,
                    descripcion: descripcion,
                    fecha: fecha
                })

                alert("Nota editada correctamente")

                setId('')
                setNombre('')
                setDescripcion('')
                setFecha('')

            } else {
                alert("No hay usuario logueado")
            }
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Editar Nota</Text>

            <TextInput
                placeholder="ID de la nota"
                value={id}
                onChangeText={setId}
                style={styles.input}
            />

            <Button title="Buscar" onPress={buscarNota} />

            <TextInput
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
            />

            <TextInput
                placeholder="Descripción"
                value={descripcion}
                onChangeText={setDescripcion}
                style={styles.input}
            />

            <TextInput
                placeholder="Fecha"
                value={fecha}
                onChangeText={setFecha}
                style={styles.input}
            />

            <Button title="Editar" onPress={editarNota} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    titulo: {
        fontSize: 20,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    }
});
`}
  </CodeBlock>

  {/* ELIMINAR */}
  <h3 className="font-semibold mt-6 mb-2">EliminarScreen.tsx</h3>
  <CodeBlock>
{`import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { auth, database } from '../firebase/Config'
import { ref, get, child, remove } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'

export default function EliminarScreen() {

    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fecha, setFecha] = useState('')

    function buscarNota() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                get(child(ref(database), 'usuarios/' + uid + '/notas/' + id))
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            const data = snapshot.val()

                            setNombre(data.nombre)
                            setDescripcion(data.descripcion)
                            setFecha(data.fecha)

                            alert("Nota cargada")
                        } else {
                            alert("No existe la nota")
                        }
                    })

            } else {
                alert("No hay usuario logueado")
            }
        })
    }

    function eliminarNota() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                const notaRef = ref(database, 'usuarios/' + uid + '/notas/' + id)

                remove(notaRef)

                alert("Nota eliminada correctamente")

                setId('')
                setNombre('')
                setDescripcion('')
                setFecha('')

            } else {
                alert("No hay usuario logueado")
            }
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Eliminar Nota</Text>

            <TextInput
                placeholder="ID de la nota"
                value={id}
                onChangeText={setId}
                style={styles.input}
            />

            <Button title="Buscar" onPress={buscarNota} />

            <TextInput
                placeholder="Nombre"
                value={nombre}
                editable={false}
                style={styles.input}
            />

            <TextInput
                placeholder="Descripción"
                value={descripcion}
                editable={false}
                style={styles.input}
            />

            <TextInput
                placeholder="Fecha"
                value={fecha}
                editable={false}
                style={styles.input}
            />

            <Button title="Eliminar" onPress={eliminarNota} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    titulo: {
        fontSize: 20,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    }
});
`}
  </CodeBlock>

  {/* NOTAS */}
  <h3 className="font-semibold mt-6 mb-2">NotasScreen.tsx</h3>
  <CodeBlock>
{`import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, database } from '../firebase/Config'
import { onAuthStateChanged } from 'firebase/auth'
import { onValue, ref } from 'firebase/database'

export default function NotasScreen() {

  const [notas, setNotas] = useState<any[]>([])

function leerNotas(uid: string) {
  
  const notasRef = ref(database, 'usuarios/' + uid + '/notas')

  onValue(notasRef, (snapshot) => {
    const data = snapshot.val()

    if (data) {
      const listaNotas = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }))

      setNotas(listaNotas)
    } else {
      setNotas([])
    }
  })
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        leerNotas(user.uid)
      } else {
        setNotas([])
      }
    })

    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mis Notas</Text>

      <FlatList
        data={notas}
        renderItem={({ item }:any) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
            <Text style={styles.fecha}>{item.fecha}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No hay notas</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10
  },
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 5
  },
  nombre: {
    fontWeight: 'bold'
  },
  fecha: {
    marginTop: 5,
    fontSize: 12,
    color: 'gray'
  }
});
`}
  </CodeBlock>

  {/* LISTA */}
  <h3 className="font-semibold mt-6 mb-2">ListaScreen.tsx</h3>
  <CodeBlock>
{`import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Tarjeta from '../components/Tarjeta';

export default function ListaScreen() {

  const [peliculas, setPeliculas] = useState([])

  const API_PELICULAS = 'https://jritsqmet.github.io/web-api/peliculas3.json'

  async function leer() {
    try {
      const resp = await fetch(API_PELICULAS);
      const json = await resp.json();
      setPeliculas(json.peliculas); 
    } catch (error) {
      console.log("Error al cargar datos:", error);
    }
  }

  useEffect(() => {
    leer();
  }, [])

  return (
    <View style={styles.container}>
      <Text>ListaScreen</Text>

      <FlatList 
        data={peliculas}
        renderItem={({ item }:any) => (
          <View style={styles.item}>
            <Tarjeta datos={item} />
          </View>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#eee'
  }
});
`}
  </CodeBlock>

  {/* informacionscreen*/}
  <h3 className="font-semibold mt-6 mb-2">InformacionScreen.tsx</h3>
  <CodeBlock>
{`import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, database } from '../firebase/Config';
import { onValue, ref } from 'firebase/database';

export default function InformacionScreen({ navigation }: any) {

    const [usuario, setUsuario] = useState({ nombre: '', email: '', edad: '' });

    function cerrarSesion() {
        signOut(auth)
            .then(() => {
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function getUsuario(uid: string) {
        const usuarioRef = ref(database, 'usuarios/' + uid);

        onValue(usuarioRef, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                setUsuario(data);
            }
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getUsuario(user.uid);
            }
        });

        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Información</Text>

            <View style={styles.card}>
                <Text style={styles.texto}>Nombre: {usuario.nombre}</Text>
                <Text style={styles.texto}>Correo: {usuario.email}</Text>
                <Text style={styles.texto}>Edad: {usuario.edad}</Text>
            </View>

            <View style={styles.boton}>
                <Button title='Cerrar Sesión' onPress={cerrarSesion} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    titulo: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    card: {
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderRadius: 5
    },
    texto: {
        marginBottom: 5
    },
    boton: {
        marginTop: 10
    }
});
`}
  </CodeBlock>

</section>

          {/* 05 COMPONENTS */}
          <section id="components" className="mb-16">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              05. Components , Tarjeta.tsx
            </h2>

            <CodeBlock>
{`import { Button, FlatList, Image, Modal, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta({ datos }: any) {

  
    const [ocultar, setOcultar] = useState(false);
    const [positivo, setPositivo] = useState(false);

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => setOcultar(true)} // abre modal
        >
            <Text>Pelicula: {datos.titulo}</Text>
            <Image source={{ uri: datos.imagen }} style={{ width: 100, height: 150 }} />

            <Modal 
                visible={ocultar}
                animationType="slide"
                transparent={false}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.titulo}>Pelicula: {datos.titulo}</Text>

                    <Image source={{ uri: datos.imagen }} style={{ width: 100, height: 150 }} />

                    <Text>Comentarios:</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Negativos</Text>
                        <Switch 
                            value={positivo} 
                            onValueChange={() => setPositivo(!positivo)} 
                        />
                        <Text>Positivos</Text>
                    </View>

                    {
                        positivo ?
                            <FlatList
                                data={datos.opiniones.opiniones_positivas.detalles}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }: any) => (
                                    <View style={styles.card}>
                                        <Text>{item.opinion}</Text>
                                    </View>
                                )}
                            />
                        :
                            <FlatList
                                data={datos.opiniones.opiniones_negativas.detalles}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }: any) => (
                                    <View style={styles.card}>
                                        <Text>{item.opinion}</Text>
                                    </View>
                                )}
                            />
                    }

                    <Text>Genero: {datos.genero}</Text>
                    <Text>Año: {datos.anio}</Text>

                    <Button title="Cerrar" onPress={() => setOcultar(false)} />
                </View>
            </Modal>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#eee'
    },
    modalContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    card: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#ddd',
        width: '100%'
    }
});
`}
            </CodeBlock>
          </section>

          {/* 06 APP */}
          <section id="app" className="mb-16">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              06. App Principal
            </h2>

            <CodeBlock>
{`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navegador } from './navigations/MainNavigator';

export default function App() {
  return (
    <Navegador />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

`}
            </CodeBlock>
          </section>

        </main>
      </div>
    </div>
  );
};

export default GuiaMovil;