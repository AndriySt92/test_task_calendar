import {EventState, EventActions, EventActionEnum} from './types'
import {IEvent} from '../../../models/IEvent'
import {IUser} from '../../../models/IUser'

const initialtate: EventState = {
    guest:[] as IUser[],
    event: [] as IEvent[]

}

const eventReducer = (state = initialtate, action: EventActions): EventState => {
    switch(action.type){
        case EventActionEnum.SET_EVENT: 
            return {
                ...state,
                event: action.payload
            }
        case EventActionEnum.SET_GUEST: 
            return {
                ...state,
                guest: action.payload
            }
        default:
            return state
    }
}

export default eventReducer