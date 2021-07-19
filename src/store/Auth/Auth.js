
const initialState = {
   authorized:false
}

export const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'auth':
                return action.payload
        default:
            return state
    }
}