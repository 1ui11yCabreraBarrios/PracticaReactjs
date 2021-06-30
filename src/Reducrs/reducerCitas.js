import { constantesCitas } from "../Constants/constantesCitas";

const veterinariaData ={
    loading: false,
    data: [],
    editCita: false,
    updateCita: null,
   
};

export default function citasReducir( state = veterinariaData , action){
    switch(action.type){
        case constantesCitas.SAVE_NEW_CITA:
        return { data: [...state.data, action.payload],};
    
        case constantesCitas.EDIT_CITA: 
        return{ ...state,
            editCita: true,
            updateCita: { cita: state.data[action.payload], index: action.payload }}

        case constantesCitas.UPDATE_CITA:
            return{}
     case constantesCitas.DELETE_CITA:
         return{data: state.data.filter((values) => action.payload !== values)};

         case constantesCitas.ERROR_CITA:
             return{}


        default: 
        return state


    }
    

}
