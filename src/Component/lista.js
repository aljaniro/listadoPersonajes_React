import React, { Fragment, useContext, useEffect } from "react";
import { contextodatos } from "./provider";
function Lista() {
  const { personajes, cargar, sel} = useContext(contextodatos);
  console.log(sel)
  
  useEffect(() => {
    
    cargar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sel]);
  if(sel===0){ return (
    <Fragment>
      {console.log(personajes)}
      <div className="container" style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)",justifyContent:"space-around",placeItems:"center"}}>
      {personajes.map((item, index) => (
       <div className="card" style={{width: "18em",display:"flex",marginBottom:"20px"}} key={item.id}>
       <img src={item.image} className="card-img-top" alt="..."/>
       <div className="card-body">
         <h5 className="card-title">
         <li className="list-group-item"> {item.name}</li>
          </h5>
         
         <ul className="list-group list-group-flush">
         <li className="list-group-item">Genero : {item.gender}</li>
    <li className="list-group-item">Status : {item.status}</li>
    <li className="list-group-item">Raza : {item.species}</li>
    <li className="list-group-item">Tipo : {item.type}</li>
   
  </ul>
        
       </div>
     </div>
        
       
      ))}
     
      </div>
    </Fragment>
  );
}
if(sel!==0){ return (
  <Fragment>
    {console.log(personajes)}
    <div className="container" style={{display: "grid",justifyContent:"center",placeItems:"center"}}>
    {personajes.map((item, index) => (
     <div className="card" style={{width: "38em",display:"flex",marginBottom:"20px"}} key={item.id}>
     <img src={item.image} className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">
       <li className="list-group-item"> {item.name}</li>
        </h5>
       
       <ul className="list-group list-group-flush">
       <li className="list-group-item">Genero : {item.gender}</li>
  <li className="list-group-item">Status : {item.status}</li>
  <li className="list-group-item">Raza : {item.species}</li>
  <li className="list-group-item">Tipo : {item.type}</li>
 
</ul>
      
     </div>
   </div>
      
     
    ))}
   
    </div>
  </Fragment>
);
}
 }

export default Lista;
