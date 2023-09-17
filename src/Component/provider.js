import React, { createContext, useState } from "react";

export const contextodatos = createContext();

export const Provedor = ({ children }) => {
  const [sel, setsel] = useState(0);

  const cargar = async () => {
    const datosanime = await fetch(
      "https://rickandmortyapi.com/api/character/"
    );
    const animes = await datosanime.json();
    console.log(animes);
    settodos(animes.results);

    if (sel === 0) {
      console.log("estoy vacio")
      setpersonajes(animes.results);
      settodos(animes.results);
    }

    if (sel !== 0) {
      console.log("aqui estoy");
      setpersonajes(animes.results);
      console.log(sel)
      const prue = todos.filter((value) => value.id == sel);
      console.log(todos)
      console.log(prue)
      setpersonajes(prue);

    }
  };

  const [personajes, setpersonajes] = useState([]);
  const [todos, settodos] = useState(personajes);

  return (
    <div>
      <contextodatos.Provider
        value={{
          personajes,
          setpersonajes,
          cargar,
          sel,
          setsel,
          todos,
          settodos,
        }}
      >
        {children}
      </contextodatos.Provider>
    </div>
  );
};
