export const loadData = () => {
  return {
    type: 'LOAD_DATA'
  };
}

export const delete_Task = (task) => {
  return {
    type: 'DELETE_TASK',
    payload:task,
  }
}

export const add_Task = (task) => {
  return {
    type: 'ADD_TASK',
    payload:task,
  }
}

export const active_Modal = () => {
  return {
    type: 'ACTIVE_MODAL',
  }
}

export const unactive_Modal = () => {
  return {
    type: 'UNACTIVE_MODAL',
  }
}
