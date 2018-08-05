

const initialState = []

// count :: (state, action) => newState
const modalData = (state = initialState, action) => {
  
  switch (action.type) {
    
    case "SET_MODAL_DATA":
    return action.modalData;
      
    default:
      return state
      
  }
  
}

export default modalData
