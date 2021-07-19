import React,{useEffect} from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router"
const UserHome = ({userDB,authorized}) => {
    const history = useHistory()
    useEffect(()=>{
        if(!authorized)return history.push('/');
    })
    return(
        <div className="min-h-screen w-full flex justify-center items-center gap-8 flex-col">
           {JSON.stringify(userDB)}
        </div>
    )
}
const userData=(state)=>{
    return {
        userDB:state.user,
        authorized:state.auth.authorized
    }
}
export default connect(userData,null)(UserHome)