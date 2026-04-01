import { Link } from "react-router-dom"


export const  HomePage=()=> {
  return (
    <div>
      <h1>Hola</h1>
      <Link to={'/guia'}>Ir a la pagina oficial</Link>
    </div>
  )
}
