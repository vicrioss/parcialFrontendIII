import { useState } from "react";
import '../form.css';

const Form = ({ onSubmit }) => {
  const [lector, setLector] = useState({
    nombre: "",
    libro: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      lector.nombre.trim().length >= 3 && 
      !lector.nombre.startsWith(" ") && 
      lector.libro.length >= 6 
    ) {
      setError(false);
      onSubmit(lector); 
    } else {
      setError(true);
    }
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label>Nombre completo:</label>
      <input
        type="text"
        value={lector.nombre}
        onChange={(event) =>
          setLector({ ...lector, nombre: event.target.value })
        }
      />
      <label>Libro favorito: </label>
      <input
        type="text"
        value={lector.libro}
        onChange={(event) =>
          setLector({ ...lector, libro: event.target.value })
        }
      />
      <button>Listo</button>
      {error && (
        <h4 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h4>
      )}
    </form>
    </div>
  );
};

export default Form;
