import React from 'react'
import Box from '@material-ui/core/Box';
import { useSelector,useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteCita ,editCita} from '../../Actions/actionCitas';


const ListaCita = () => {
    
    const citas = useSelector((store) => store.citas.data);
    const dispatch = useDispatch();

 return (
        <div>
             <h2 > <Box color="secondary.main">Administra tus Citas</Box></h2>
            <ul className="list-group " >

                { Object(citas).length === 0 ? (<li className="list-group-item">No hay citas</li>) :
                (

                    citas.map((values, index) => (
                        <li className="list-group-item card border-primary mb-3 rounded" key={index}>
                            
                          <div>{Object.keys(values)[0]}: {values.mascota}</div>
                          <div>{Object.keys(values)[1]}: {values.propietario}</div>
                          <div>{Object.keys(values)[2]}: {values.telefono}</div>
                          <div>{Object.keys(values)[3]}: {values.email}</div>
                          <div>{Object.keys(values)[4]}: {values.sintomas}</div> 
                          <Button
                          variant="contained" color="secondary"
                          startIcon={<DeleteIcon />}
                          className="float-right mx-2"
                          onClick={(e) => {
                          e.preventDefault();
                          dispatch(deleteCita(values));
                          }}
                          >
                            Delete
                          </Button>
                          <Button variant="contained" color="primary"
                           startIcon={<EditIcon/>}
                           onClick={(e) => {
                           console.log(index);
                            e.preventDefault();
                            dispatch(editCita(index));
                          }}                        
                           className=" float-right"
                          >
                            Edit
                          </Button>
                        </li>
                      ))
                    )}
            </ul>
        </div>
    )
}

export default ListaCita
