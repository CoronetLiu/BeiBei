
import axios from 'axios'
import store from './store'

const actionCreator = {
    getTodos(){
        axios.get("./public/data/......").then((res)=>{
            store.dispatch({
                type:'GET_TODOS',
                todos:res.data
            })
        })
    },
    addTodo(new_title){
        store.dispatch({
            type:'ADD_TODO',
            title:new_title
        })
    },
    finishTodo(id,flag){
        store.dispatch({
            type:'FINISH_TODO',
            id,flag
        })
    },
    removeTodo(id){
        store.dispatch({
            type:'REMOVE_TODO',
            id
        })
    }
}

export default actionCreator