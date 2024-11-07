import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form';

function App() {
  const [lectorData, setLectorData] = useState(null); 

  return (
    <div>
      <h1>Cuéntame cual es tu libro favorito!</h1>
      <Form onSubmit={(data) => setLectorData(data)} /> 
      { lectorData && <Card lector={lectorData} />} 
    </div>
  );
}

export default App;

