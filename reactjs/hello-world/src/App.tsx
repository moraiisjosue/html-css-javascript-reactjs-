import { useState } from 'react';
import { Header } from "./componets/header";
import { Footer } from "./componets/footer";

const App = () => {
 
const [name, setName] = useState("Josué");
const [age, setAge] = useState(33);
const [bg, setBg] = useState("#FFFFE0"); //variavel que pode ser modivicada

const[list, setList] = useState([
  "Testando frase",
  "Mais uma frase",
  "Eita de novo essa frase"
]);

const hand18 = () => {
  setAge(18);
  setBg("#32CD32");
}

const hand17 = () => {
  setAge(17);
  setBg("#800000");
}

  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />
      <button onClick={hand18}>+18</button>
      <button onClick={hand17}>-18</button>

     <ul>
      {list.map((frase, index)=>
        <li key = {index}>{frase}</li>
      )}
     </ul>

      <Footer />
    </div>
  );
}

export default App;
