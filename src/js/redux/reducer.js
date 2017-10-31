
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
        case 'FINISH_TODO':

            state.todos=state.todos.map(function  (item) {
                if(item.id==action.id){
                    item.isFinished=action.flag
                }
                return item
            })

            return state;break;
        case 'REMOVE_TODO':
            for(var i =0;i<state.todos.length;i++){
                if(state.todos[i].id==action.id){
                    state.todos.splice(i,1)
                    break;
                }
            }

            return state;break;

        default :
            return state;break;
    }
}

export default reducer