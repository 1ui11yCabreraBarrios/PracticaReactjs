import React from "react";
import { useFormik } from 'formik';
import { useDispatch,useSelector} from "react-redux";
import { saveNewCita } from "../../Actions/actionCitas";
import Box from '@material-ui/core/Box';
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const validate = values => {
  const errors = {};
  if (!values.mascota) {
    errors.mascota = 'Required';
  } else if (values.mascota.length > 8) {
    errors.mascota = 'Debe tener 5 caracteres o menos';
  }

  if (!values.propietario) {
    errors.propietario = 'Required';
  } else if (values.propietario.length > 15) {
    errors.propietario = 'Debe tener 15 caracteres o menos';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección de correo electrónico inválida';
  }
  if (!values.telefono) {
    errors.telefono = 'Required';
  } else if (!/^\d{8}$/i.test(values.telefono)) {
    errors.telefono = 'Ingrese un numero telefonico ';
  }

  if (!values.sintomas) {
    errors.sintomas = 'Required';
  } else if (values.sintomas.length > 20) {
    errors.sintomas = 'Debe tener 20 caracteres o menos';
  }
  return errors;
};

const Veterinaria = () => {
  const dispatch = useDispatch();
  const { editCita, updateCita} = useSelector((state) => state.citas);
  
  
  const formik = useFormik({
    
    initialValues: {
      mascota: '',
      propietario: '',
      telefono: '',
      email: '',
      sintomas: '',
    },
    enableReinitialize: true,
    validate,
   
    onSubmit:(values,{resetForm}) => {

      editCita ?  dispatch(editCita())  : dispatch(saveNewCita(values)) 
   
    resetForm();
  
    },
    
  });
  return (
    
            <form onSubmit={formik.handleSubmit}>
             
              <legend className="mb-4">
                {editCita ? (<Box color="secondary.main">Modifcar Datos del Paciente</Box>)
                 : ((<Box color="secondary.main">Datos del Paciente</Box>))}</legend>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Nombre Mascota:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input
                    type="text"
                    id="mascota"
                    name="mascota"
                    className="form-control"
                    placeholder="Nombre Mascota"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mascota}
                  />
                </div>
                {formik.errors.mascota ? <span className="text-danger">{formik.errors.mascota}</span> : null}
               
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Propietario:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input
                    type="text"
                    id="propietario"
                    name="propietario"
                    className="form-control"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.propietario}
                    
                 />
                </div>
                {formik.errors.propietario ? <span className="text-danger">{formik.errors.propietario}</span> : null}
               
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Teléfono:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="form-control"
                    placeholder="Número de Teléfono"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.telefono}
                  />
                </div>
                {formik.errors.telefono ? <span className="text-danger">{formik.errors.telefono}</span> : null}
               
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Correo:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo Electronico"
                    onChange={formik.handleChange}
                    onBlur ={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>
                {formik.errors.email ? <span className="text-danger">{formik.errors.email}</span> : null}
              </div>
              
             
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">
                  Sintomas:
                </label>
                <div className="col-sm-8 col-lg-8">
                  <textarea className="form-control"  
                   type ="text"
                   id="sintomas" 
                   name="sintomas"  
                   placeholder="Descripcion"
                   onChange={formik.handleChange}
                   onBlur ={formik.handleBlur}
                   value={formik.values.sintomas}
                  />
                </div>
                {formik.errors.sintomas ? <span className="text-danger">{formik.errors.sintomas}</span> : null}
              </div>
              <div className="form-group">
                 {editCita ? (<Button 
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                 className="rounded w-100 d-block"  
                 >
                  Modificar Cita
                </Button>) : (<Button type="submit" 
                 variant="contained"
                 startIcon={<SaveIcon />}
                  className="btn btn-success rounded w-100 d-block">
                  Guardar Cita
                </Button>)}
            </div>
            </form>
         
      
    
  );
};

export default Veterinaria;
