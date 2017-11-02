import React from "react";
import {Link} from 'react-router'
import axios from 'axios'
class Search extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
        	searchGoods:[]
        }
    }
    getSearch(){
    	axios.get("http://localhost:8000/beibei_api2/mroute.html?",{
    		method:"beibei.item.search",
			keyword:"口红",
			page:1,
			page_size:20,
			source:"pintuan",
			sort:undefined
    	}).then((res)=>{
    		console.log(res)
    	})
    }
    componentWillMount(){
    	this.getSearch()
    }
    render(){
        return (
                <div>
                    <div className="searchBar_yl">
                    	<input type="text" placeholder="输入你要搜索的商品"/>
                    	<Link to="/group" href="#">取消</Link>
                    </div>
                    
                </div>
            )
    }
}

export default Search