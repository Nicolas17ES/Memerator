
const memeratorReducer = (state, action) => {
    switch(action.type){
        case 'SET_STATUS':
            return {
                ...state,
                status: action.payload,
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }
        case 'SET_IMAGENAME':
            return {
                ...state,
                imageName: action.payload,
            }
        case 'SET_IMAGEPATH':
            return {
                ...state,
                imagePath: action.payload,
            }
        case 'SET_MEMETEXT':
            return {
                ...state,
                memeText: action.payload,
            }
        case 'SET_MEMETEXT2':
            return {
                ...state,
                memeText2: action.payload,
            }
        // case 'SET_IMAGE':
        //     return {
        //         ...state,
        //         imageName: action.payload,
        //     }
        
        default: 
            return state;
    }
}

export default memeratorReducer