
let _state = {
    todos:[]
}
let count = 0

const reducer = (state=_state,action)=>{
    switch(action.type){
        case 'GET_TODOS':
            state.todos=state.todos.concat(action.todos)
            count = state.todos.length
            console.log(state,111)
            return state;break;
        case 'ADD_TODO':
            state.todos.push({
                id:++count,
                title:action.title,
                isFinished:false
            })
            return state;break;
        default :
            return state;break;
    }
}

export default reducer