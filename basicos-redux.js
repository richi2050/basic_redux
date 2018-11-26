const redux = require('redux');
const createStore = redux.createStore;

//state inicial 
const stateInicial ={
    usuarios : []
}

//Reducer

const reducerPrincipal = (state = stateInicial, action) =>{

    return state;
}


// el store es que guardare el state de la aplicacion 
//utiliza tre sparametros 2 son opcionales  reducer, state Inicial  applyMiddleware
// Reducer es necesario es el encargado de como se cambia el state
const store = createStore(reducerPrincipal); 


console.log(store.getState());
