let nextTodoId = 0;

export const addTodo = (text)=>({
       type:'ADD_TODO',
       id:nextTodoId++,
       text
});
export const toggle_todo = (id)=>({
       type:'TGGLE_TODO',
       id,
});
export const visibilityfilter = (filter)=>({
    type:'SET_VISIBILITY_FILTER',
    filter
});