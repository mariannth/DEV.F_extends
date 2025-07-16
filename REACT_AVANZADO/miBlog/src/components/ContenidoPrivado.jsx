import { useUser } from "../context/UserContext";
import ArticulosBlog from './Arti-Blog'


export default function ContenidoPrivado(){
      const { user } = useUser();
    
      if (!user) return <h1>🔒 Debes iniciar sesión para ver el contenido 🔒</h1>;

      return(
        <div>
            <h2>Welcom {user.name}</h2>
            <ArticulosBlog />
        </div>
      )


}