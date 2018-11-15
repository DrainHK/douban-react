import { combineReducers } from 'redux';
import home from './home'
import list from './list'
import details from './details'
//使用redux的combineReducers方法将所有reducer打包合并起来
const rootReducer = combineReducers({
  home,
  list,
  details
})
export default rootReducer
