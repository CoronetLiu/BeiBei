
import axios from 'axios'

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
    }

}

export default actionCreator