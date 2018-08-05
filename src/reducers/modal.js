

const initialState = false

// count :: (state, action) => newState
const modal = (state = initialState, action) => {
  
  switch (action.type) {
    
    case "SET_MODAL":
    return action.boolean;

    default:
      return state
      
  }
  
}

export default modal
