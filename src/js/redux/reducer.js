
let _state = {
    userInfo:{
        userID:""
    }
}

const reducer = (state=_state,action)=>{
    switch(action.type){
        case 'GET_TODOS':
            state.todos=state.todos.concat(action.todos)
            return state;break;
        case 'CHANGE_USERINFO':
            state.userInfo = action.userInfo;
            return state;break;
        default :
            return state;break;
    }
}

export default reducer