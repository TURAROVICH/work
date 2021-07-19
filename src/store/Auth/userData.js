const initialState = {
    user:{}
 }
 
 export const userReducer = (state=initialState,action)=>{
     switch(action.type){
         case 'user':
                 return action.payload
         default:
             return state
     }
 }