
import { GET_HOTLIST, GET_COMINGSOONLIST, GET_TOPLIST } from '../actions/home'


export default function home(state = {}, action) {
    switch (action.type) {
        case GET_HOTLIST:
            return Object.assign({}, state, { 
                hotList: action.hotList 
            })
            break;
        case GET_COMINGSOONLIST:
            return Object.assign({}, state, {
                comingSoonList: action.comingSoonList
            })
            break;
        case GET_TOPLIST:
            return Object.assign({}, state, {
                topList: action.topList
            })
            break;
        default:
            return state
    }
}
