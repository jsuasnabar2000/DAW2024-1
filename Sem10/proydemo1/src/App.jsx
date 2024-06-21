import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = () => {
   setName("Jaime")
   setAddress("Lima 120")
  }
  useEffect(() => {
    let fecha = new Date();
    document.title="Page1:"+fecha

  },[])
  

  return (
    
    <>
      <h2>Usando usState</h2>
      <p>nombre: {name}</p>
      <p>direccion: {address}</p>
      <button onClick={handleClick}>Cambiar</button>
    </>
  )
}

export default App
