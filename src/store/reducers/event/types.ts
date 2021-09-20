import {IUser} from '../../../models/IUser'
import {IEvent} from '../../../models/IEvent'

export interface EventState {
    guest: IUser[]
    event: IEvent[]
}

export enum EventActionEnum {
    SET_GUEST = "event/SET_GUEST",
    SET_EVENT = "event/SET_EVENT",
}

export interface SetGuestAction {
    type: EventActionEnum.SET_GUEST
    payload: IUser[]
}

export interface SetEventAction {
    type: EventActionEnum.SET_EVENT
    payload: IEvent[]
}

export type EventActions = SetGuestAction | SetEventAction