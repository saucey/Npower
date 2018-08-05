import {showPageContent} from '../actionCreators'

const fetchContent = store => next => action => {

  next(action)
  
  switch (action.type) {

    //Calls all content from a api mocking service, later can be replace we real API
    
    case 'GET_PAGE_CONTENT':
      fetch("http://localhost:8080/api/content")
        .then(resp => resp.json())
        .then(content => store.dispatch(showPageContent(content)))
      break;
      
    default:
    
  }
  
  
}

export default fetchContent
