export const Auth = (data) =>{
    return {
        type:'auth',
        payload:{authorized:data}
    }
}

export const User = (data) => {
    return {
        type:'user',
        payload:data
    }
}