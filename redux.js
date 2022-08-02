//store => wadah atau penyimpanan value atau state secara global
//state => berfungsi untuk menlakukan update store
//action => Proses pemanggilan state
//subscription  => pemanggilan store yang diperlukan

const redux = require('redux')

const createStore = redux.createStore;


const initialState = {
    name: 'Doni',
    age: 20
}

//state
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_AGE" :
            return {
                ...state,
                age: state.age + 1
            }
        case "CHANGE_NAME" :
            return {
                ...state,
                name: action.newName
            }
        default :
            return state;
    }
}


//store
const store = createStore(rootReducer)
console.log(store.getState())

//subscrition
store.subscribe(()=>{
    console.log("store change", store.getState())
})

//dispatching action
store.dispatch({
    type: "ADD_AGE"
})

// store.dispatch({
//     type : "CHANGE_NAME", newName : "Octa"
// })
console.log(store.getState());