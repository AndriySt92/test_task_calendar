import {SetGuestAction ,SetEventAction ,EventActionEnum} from './types'
import {IUser} from '../../../models/IUser'
import {IEvent} from '../../../models/IEvent'

export const EventActionCreators = {
    setGuest: (payload: IUser[]): SetGuestAction => ({
        type: EventActionEnum.SET_GUEST,
        payload
    }),
    setUser: (payload: IEvent[]): SetEventAction => ({
        type: EventActionEnum.SET_EVENT,
        payload
    }),
}
