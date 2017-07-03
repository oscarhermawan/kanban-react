export const loadData = (tasks) => {
  return {
    type: 'LOAD_DATA',
    payload:tasks,
  };
}
