import {combineReducers} from 'redux'
import { authReducer } from './Auth/Auth'
import {userReducer} from './Auth/userData'
export const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer
})