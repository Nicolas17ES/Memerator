
const memeratorReducer = (state, action) => {
    switch(action.type){
        case 'SET_STATUS':
            return {
                ...state,
                status: action.payload,
            }
        
        default: 
            return state;
    }
}

export default memeratorReducer