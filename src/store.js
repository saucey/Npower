import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import fetchContent from './middleware/fetchContent'

export default createStore(
  reducers,
  applyMiddleware(fetchContent)
)