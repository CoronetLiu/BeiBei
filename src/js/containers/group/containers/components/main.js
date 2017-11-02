import React from "react";
import axios from "axios"
class Main extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
        	goods:[]
        }
    }
    getGoods(){
    	console.log(56652)
    	axios.get("./public/data/addNew.json").then((res)=>{
    		this.setState({
    			goods:res.data
    		})
    	})
    }
    componentWillMount(){
    	this.getGoods()
    }
    showGoods(){
    	return this.state.goods.map((item,i)=>{
    		
    		return (
    			<div className="goods_box_yl" key={item.id}>
	    			<img src={item.img}/>
	    			<p>{item.name}</p>
	    			<ul className="price_list_yl">
	    				<p>
	    					<li><span>¥</span>{item.price}</li>
	    					<li>{item.oldprice}</li>
	    				</p>
	    				<div className="goTeam_yl">
	    					<img src="https://h0.hucdn.com/open/201724/21d777a959c51877_225x225.png!60x60.jpg"/>
	    				去开团</div>
	    			</ul>
	    		</div>
    		)
    	})
    }
    render(){
        return (
				<div className="th_main_yl">
				{this.showGoods()}
				</div>
            )
    }
}

export default Main