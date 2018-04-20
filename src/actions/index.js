export const add_Task = (task) => {
  return {
    type: 'ADD_TASK',
    payload:task,
  }
}


export const edit_Task = (task) => {
  return {
    type: 'EDIT_TASK',
    payload:task,
  }
}

export const change_Status = (task) => {
  return {
    type: 'CHANGE_STATUS',
    payload:task,
  }
}

export const delete_Task = (task) => {
  return {
    type: 'DELETE_TASK',
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
