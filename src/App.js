import "./App.css";
import { useRef } from "react";
import { useState, useEffect } from "react";
import PorDefecto,{Mycomponent, Mycomponent2} from "./components/components";
import uno from "./assets/img/1.png";
import dos from "./assets/img/2.jfif";
import tres from "./assets/img/3.jfif";
import {Cuadrado} from './styled';
import { Rutas } from './aplicacion/routes';
import axios from "axios";
import Myprovider from "./aplicacion/provider/provider";
import Login from "./components/login";
import Showstate from "./components/showstate";


function App() {
  //LOGIN
  const [name1,setName1] = useState("null");
  useEffect( () => {

  },[]);
  
  

  //API POKEMON
  const [name, setName] = useState("null");
  useEffect( () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/3')
    .then(res => {
      console.log(res.data)
      setName(res.data.name)
     
    })
  },[]);
  const titulo = <h1>Proyecto para diseño</h1>;

  const contenido = <p>Contenido de la página</p>;

  const boton = () => {
    alert("Website sobre react ");
  };
  const valores = ["a", "b", "c"];
  //USE REF INTO
  const resultRef = useRef(null);
  const inputRef = useRef(null);
  const Lista = () => {
    resultRef.current.innerHTML = inputRef.current.value;
  };
  //Usestate y useEffect
  const [a, setA] = useState(5632);

  const cambiarCosas = () => {
    setA(a);
  };
  useEffect(() => {
    alert("Visitas");
  }, [a]);
  const condition = false;
  return (
    <div className="App">
      {titulo}
      {contenido}

        <Rutas />
        <div> 
      <p>Datos obtenidos del servidor: {name}</p>
    <p>Context API</p>
    <Myprovider>
      <Login/>
      <Showstate/>
      </Myprovider>
    </div>  
      <button onClick={boton}>Más información</button>
      {valores.map((element) => (
        <p>{element}</p>
      ))}
      <input type="text" ref={inputRef} />
      <button onClick={Lista}>Apuntar</button>
      <div ref={resultRef}></div>
      <div>
        <h1>{a}</h1>
        <button onClick={() => cambiarCosas()}>Visitas a la web</button>
      </div>
      <div>
        <p>Sección</p>
       <Mycomponent param="Realizado por Guillermo" param2="23/02/2023"></Mycomponent>
       <Mycomponent2/>
       <PorDefecto/>
      </div>
      <div>
        {condition ? <p>Es hora de parar</p>:<p>Deberías de seguir</p>}
      </div>

      <div>
        <h1>Imagenes sobre react</h1>
        <img src={uno}></img>
        <img src={dos}></img>
        <img src={tres}></img>
      </div>
        
    </div>
  );
}

export default App;
