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
}]

export default(state = initialState, action) =>{
  if(action.type === 'LOAD_DATA'){
    return [...state]
  }
  else if(action.type === 'ADD_HERO'){
    console.log('state', state);
    console.log('payload',action.payload);
    return [...state, action.payload]
  }
  return state
}
