import { constantesCitas } from "../Constants/constantesCitas";

export const saveNewCita = (cita) => (dispatch) => {
    console.log(cita);
    try {
      dispatch({
        type: constantesCitas.SAVE_NEW_CITA,
        payload: cita,
      });
    } catch (error) {
      dispatch({ type: constantesCitas.ERROR_CITA, payload: error });
    }
  };

  export const editCita = (index) => (dispatch)=>{
      try{
          dispatch(
              {
              type: constantesCitas.EDIT_CITA,
              payload:index,
              })

      }catch(error){
          dispatch({type: constantesCitas.ERROR_CITA, payload: error});

      }
  }

  export const updateCita =(cita,index) => (dispatch) =>{
      try{
dispatch({
    type:constantesCitas.UPDATE_CITA,
    payload: {cita, index},
})
      }catch(error){
      dispatch({
          type: constantesCitas.ERROR_CITA, payload: error
      });
    }
  }
 

  export  const deleteCita =(cita) => (dispatch)=>{

    try{
        dispatch({
            type:constantesCitas.DELETE_CITA,
            payload:cita,
        })
    }catch(error){
        dispatch({
type: constantesCitas.ERROR_CITA, payload:error
        });
    }
  }