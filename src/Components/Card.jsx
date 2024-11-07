import '../card.css';


const Card = ({ lector }) => {
  return (
    <div className='cardContainer'>
      <h3>Gracias {lector.nombre} por completar la información!</h3>
      <h4>Tu libro favorito es: {lector.libro}</h4>
    </div>
  );
};

export default Card;