import { Link } from 'react-router-dom'
import '../../styles/Error.css'

function Error404() {
  return (
    <div className="error">
        <h1 className="error404">404</h1>
      	<p className="error404_oups">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error404_retour">Retournez sur la page d'accueil</Link>
    </div>
  )
};

export default Error404;