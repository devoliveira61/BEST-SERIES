import './error.css'
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1>Error 404 ;(</h1>
      <p>A página que você está procurando não foi encontrada.</p>
      <Link to={"/"}>Acessar o inicio</Link>
    </div>
  );
}

export default Error;
