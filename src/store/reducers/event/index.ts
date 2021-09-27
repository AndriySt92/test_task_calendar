import {EventState, EventActions, EventActionEnum} from './types'
import {IEvent} from '../../../models/IEvent'
import {IUser} from '../../../models/IUser'

const initialtate: EventState = {
    guests:[] as IUser[],
    events: [] as IEvent[]

}

const eventReducer = (state = initialtate, action: EventActions): EventState => {
    switch(action.type){
        case EventActionEnum.SET_EVENT:   
            return {
                ...state,
                events: action.payload as IEvent[]
            }
        case EventActionEnum.SET_GUESTS: 
            return {
                ...state,
                guests: action.payload
            }
        default:
            return state
    }
}

export default eventReducer