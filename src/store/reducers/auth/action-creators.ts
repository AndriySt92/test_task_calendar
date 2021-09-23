import {SetIsAuthAction, SetUserAction, SetErrorAction, SetIsLoadingAction, AuthActionEnum} from './types'
import {IUser} from '../../../models/IUser'
import { AppDispatch } from '../../index'
import userApi from '../../../api/userApi'

export const AuthActionCreators = {
    setIsAuth: (payload: boolean): SetIsAuthAction => ({
        type: AuthActionEnum.SET_AUTH,
        payload
    }),
    setUser: (payload: IUser): SetUserAction => ({
        type: AuthActionEnum.SET_USER,
        payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: AuthActionEnum.SET_ERROR,
        payload
    }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload
    }),
    login: (payload: {username: string, password: string}) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout( async () => {
                const { data } = await userApi.getUsers()

                const mockUser = data.find(user => {
                    return user.username === payload.username && user.password === payload.password
                })

                if(mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)

                    dispatch(AuthActionCreators.setUser(mockUser))
                    dispatch(AuthActionCreators.setIsAuth(true))
                } else {
                    dispatch(AuthActionCreators.setError('Incorrect username or password'))
                }
            }, 1000);
            
            dispatch(AuthActionCreators.setIsLoading(false))
            
        } catch (error) {
            dispatch(AuthActionCreators.setError("An error occurred while logging in"))
        }
    },
    logout: () => (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('user')
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser({} as IUser))
    }
}
