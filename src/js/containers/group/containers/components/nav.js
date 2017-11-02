import React from "react";
import axios from 'axios'
class Nav extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
        	nav:[]
        }
    }
    getNav(){
    	axios.get("./public/data/nav.json").then((res)=>{
    		this.setState({
    			nav:res.data
    		})
    	})
    }
    showNav(){
    	return this.state.nav.map((item,i)=>{
    		return <div className="swiper-slide nav_item_yl" key={item.id}>{item.word}</div>
    	})
    }
    componentWillMount(){
    	this.getNav()
    }
    render(){
        return (
			<div className="swiper-container nav_yl">
			    <div className="swiper-wrapper">
			    {this.showNav()}
			    </div>
			</div>
            )
    }
    componentDidMount(){
    	this.swiper = new Swiper ('.nav_yl', {		    
		   freeMode : true,
		   slidesPerView : 'auto',
		   freeModeSticky : true ,
		   freeModeMomentumRatio:0.3
	    })
    }
    componentDidUpdate(){
    	this.swiper.update()
    }
}

export default Nav