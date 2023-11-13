import React from "react";
import reactLogo from '../assets/react.svg'
import eye from '../assets/eye.webp'
import { useState } from "react";
import "../Styles/Body.css"

export const Main = () => {
  const [count, setCount] = useState(0)
  return (
      <>
      <h1>Proyecto de muestra</h1>
      <div className="mainContainer">
        <div className="textContainer">
          <h3>
            CADA MIRADA ES DIFERENTE, CADA OJO ES UNICO.
          </h3>
        </div>
        <img src={eye} className="bodyImg" alt="" />
        </div>
      </>  
  );
};
      
      /*
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
      </button>
      </div>
    */