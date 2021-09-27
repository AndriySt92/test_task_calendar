import {SetGuestsAction ,SetEventAction ,EventActionEnum} from './types'
import {IUser} from '../../../models/IUser'
import {IEvent} from '../../../models/IEvent'
import { AppDispatch } from '../..'
import userApi from '../../../api/userApi'

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestsAction => ({
        type: EventActionEnum.SET_GUESTS,
        payload
    }),
    setEvents: (payload: IEvent[]): SetEventAction => ({
        type: EventActionEnum.SET_EVENT,
        payload
    }),
    getGuests: () => async (dispatch: AppDispatch) => {
        const { data } = await userApi.getUsers()
        dispatch(EventActionCreators.setGuests(data))
    },
    createEvent: (event: IEvent) =>  async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch (e) {
            console.log(e)
        }
    },
    getEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e) {
            console.log(e)
        }
    }
}
