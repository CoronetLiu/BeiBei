
import axios from 'axios'

const actionCreator = {
    changeUserInfo(params){
        return (dispatch)=>{
            axios.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
                params:params
            }).then((res)=>{
                if(res.data.userID){
                    dispatch({
                        type:'CHANGE_USERINFO',
                        userInfo:res.data
                    })
                }else{
                    alert('fail')
                }
            })
        }
    },
    addTodo(new_title){
        store.dispatch({
            type:'ADD_TODO'
        })
    }
}

export default actionCreator