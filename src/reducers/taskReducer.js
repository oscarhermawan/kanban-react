const initialState = [{
  id:1,
  title:'makan',
  description:'lagi makan',
  status:'todo',
}, {
  id:2,
  title:'minum',
  description:'lagi minum',
  status:'doing',
},
{
  id:3,
  title:'javascript',
  description:'ngoding javascript',
  status:'doing'
}]

export default(state = initialState, action) =>{
  if(action.type === 'LOAD_DATA'){
    return [...state]
  }
  else if(action.type === 'ADD_TASK'){
    const id = state.length+1
    const tmp = { ...action.payload, id:id}
    return [...state, action.payload]
  }
  else if(action.type === 'DELETE_TASK'){
    const tmp = state.filter(task => task.id !== action.payload.id)
    return [...tmp]
  }
  return state
}
