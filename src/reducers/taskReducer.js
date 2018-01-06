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
    return [...state, tmp]
  }
  else if(action.type === 'DELETE_TASK'){
    const tmp = state.filter(task => task.id !== action.payload.id)
    return [...tmp]
  }

  else if(action.type === 'CHANGE_STATUS'){
    let newTask = {}
    if(action.payload.status === 'backlog'){
      newTask = {
        id:action.payload.id,
        title:action.payload.title,
        description:action.payload.description,
        status:'todo',
      }
    } else if(action.payload.status === 'todo'){
      newTask = {
        id:action.payload.id,
        title:action.payload.title,
        description:action.payload.description,
        status:'doing',
      }
    } else if(action.payload.status === 'doing'){
      newTask = {
        id:action.payload.id,
        title:action.payload.title,
        description:action.payload.description,
        status:'done',
      }
    }

    const tmp = state.map(task => { if(task.id == action.payload.id){
      return newTask;
    } else {
      return task
    }})
    return [...tmp]
  }
  return state
}
