import {IUser} from '../../../models/IUser'

export interface AuthState {
    isAuth: boolean
    isLoading: boolean
    user: IUser
    error: string
}

export enum AuthActionEnum {
    SET_AUTH = "auth/SET_AUTH",
    SET_ERROR = "auth/SET_ERROR",
    SET_USER = "auth/SET_USER",
    SET_IS_LOADING = "auth/SET_IS_LOADING",
}

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_AUTH
    payload: boolean
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER
    payload: IUser
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR
    payload: string
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING
    payload: boolean
}

export type AuthActions = SetIsAuthAction | SetUserAction | SetErrorAction | SetIsLoadingAction