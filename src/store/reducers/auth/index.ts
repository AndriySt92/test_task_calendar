import {AuthState, AuthActions, AuthActionEnum} from './types'
import {IUser} from '../../../models/IUser'

const initialtate: AuthState = {
    isAuth:false,
    user: {} as IUser,
    error: '',
    isLoading: false
}

const authReducer = (state = initialtate, action: AuthActions): AuthState => {
    switch(action.type){
        case AuthActionEnum.SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case AuthActionEnum.SET_USER: 
            return {
                ...state,
                user: action.payload
            }
        case AuthActionEnum.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case AuthActionEnum.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default authReducer