

const initialState = []

// count :: (state, action) => newState
const pageContent = (state = initialState, action) => {
  
  switch (action.type) {
    
    case "SHOW_PAGE_CONTENT":
    return action.pageContent;

    default:
      return state
      
  }
  
}

export default pageContent
