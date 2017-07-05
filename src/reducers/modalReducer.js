const initialState = 'modal'

export default(state = initialState, action) =>{
  if(action.type === 'ACTIVE_MODAL'){
    return 'modal is-active'
  } else if(action.type === 'UNACTIVE_MODAL'){
    return 'modal'
  }

  return state
}
