import { combineReducers } from 'redux'

// import counters from './counters'
import modal from './modal'
import modalData from './modalData'
import pageContent from './pageContent'


export default combineReducers({
  modal,
  modalData,
  pageContent
})
