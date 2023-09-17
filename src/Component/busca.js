import React, { useEffect, useContext,useRef } from "react";
import { contextodatos } from "./provider";
import { useForm } from "react-hook-form";

function Busca() {
  const {  cargar, setsel, sel, todos,personajes  } =
    useContext(contextodatos);

  useEffect(() => {
    
    cargar();
    console.log(personajes,"toyyyyyyyyyyyyyyyyyyyyyyyyyy")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sel]);

  const { register, handleSubmit } = useForm();
  const val = useRef();

  const enviar = (datos) => {
    console.log(datos.seleccionado);

    console.log(val);
    setsel(datos.seleccionado);
  };


  return (
    <div>
      <div className="container">
        {console.log(todos)}
        <form onSubmit={handleSubmit(enviar)}>
          {console.log(sel)}
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            onClick={handleSubmit(enviar)}
            name="seleccionado"
            {...register("seleccionado", {
              required: "Required",
            })}
          >
            {todos.map((item, index) => (
              <option value={item.id} key={item.id} ref={val}>
                {item.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}

export default Busca;
