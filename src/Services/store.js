import {createStore, combineReducers, compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import pokeReducer from '../redux/Ducks'
import movieReducer from '../Reducrs/reducerMovies'
import citasReducir from '../Reducrs/reducerCitas'


const rootReducer= combineReducers({
    pokemones: pokeReducer,
    movies : movieReducer,
    citas: citasReducir


})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default function generate(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}
