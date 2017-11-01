
import React from 'react'
import fetch from "../../../fetch"
import axios from 'axios'


class NewMain extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			list:[]
		}	
	}

	getList(){
		axios.get('http://localhost:8000/beibei_api/discovery/newly_recom_get/1-1509545964.html').then((res)=>{
			console.log(res.data)
		})
	}
	
	componentWillMount(){
		this.getList()
	}
	render(){
		return (			
				 <div className="newMain">凑数
				 </div>					
			)
	}

}

export default NewMain