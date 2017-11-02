
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
		
		fetch.get('http://localhost:8000/beibei_api/discovery/newly_recom_get/1-1509545964.html').then((res)=>{

			return res.json() 

		 })
		.then((data)=>{
			console.log(data.newly_recommend_products)
			let _price=[]
			for(var i=0;i<data.newly_recommend_products.length;i++){
				_price.push({id:i,
							 price:parseInt(data.newly_recommend_products[i].price)/100,
							 Img:data.newly_recommend_products[i].img,
							 Discount_desc:data.newly_recommend_products[i].discount_desc,
							 Title:data.newly_recommend_products[i].title,
					         Buying_info:data.newly_recommend_products[i].buying_info})
			}

		   	this.setState({
		  		list:_price
			})
		})
	}
	
	showlist(){
		return this.state.list.map((item,i)=>{
			return <div key={item.id} className="main-content-z">
				<img className="productImg-z" src={item.Img}/>
				<div className="product-info-z">
					<div className="price-z">
						<span>￥{item.price}</span>
						<span className="discount-z">{item.Discount_desc}</span>
					</div>
					<div className="title-z">{item.Title}</div>
					<div className="sub-info-z">
						<span>2个小时前</span>
						<span>{item.Buying_info}</span>
					</div>
				</div>
			</div>
		})
	}

	componentWillMount(){		
		this.getList()
	}

	
	render(){
		return (			
				 <a className="newMain">
				 		{this.showlist()}
				 </a>					
			)
	}

}

export default NewMain