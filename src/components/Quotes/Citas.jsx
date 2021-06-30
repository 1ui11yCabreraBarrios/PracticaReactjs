import React from 'react';
import Box from '@material-ui/core/Box';
import Veterinaria from '../Quotes/Veterinaria'
import ListaCita from '../Quotes/ListaCita';



const Citas = () => {

  return (
    <div>
      <h2 className="text-center my-5 titulo">
      <Box color="secondary.main"> Administrador de Pacientes de Veterinaria</Box>
      </h2>
      <div className="container mt-5 p-5">
        <div id="contenido" className="row">
          <div className="col-md-6 ">
              <Veterinaria/>
               </div>
          <div className="col-md-6">
              <ListaCita/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Citas;

