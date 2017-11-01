

import React from "react";
import fetch from "../../../fetch";
import NewBanner from "./NewBanner";

class NewHeader extends React.Component{
	constructor (props,context){
		super(props,context)
		this.state = {
			NewDate :[]
		}
	}

	getNewDate(){

		fetch.get ('http://localhost:8000/public/data/newDate.json').then((res)=>{
			return res.json()
		}).then((data)=>{
			//console.log(data)
			this.setState({
				NewDate:data
			})
		})
	}

	showNewDate(){
		return this.state.NewDate.map((item,i)=>{
			return <div className="swiper-slide  newDate-slide-z" key={item.id}>
				<p className="time">{item.date}</p>
				<p className="status">{item.word}</p>
			</div>
		})
	}

	componentWillMount(){
		this.getNewDate()
	}


	render(){
		return (
			<div className="newHeader">
				<div className="newDate-content-z">
					<div className = "swiper-container newDate-z">
						<div className = "swiper-wrapper newDate-wrapper-z">
							{this.showNewDate()}
						</div>
					</div>

				</div>
				<NewBanner/>
			</div>

			)
	}

	componentDidMount(){
		this.swiper = new Swiper(".newDate-z",{
            freeMode : true,
            slidesPerView : 'auto',
            freeModeSticky : true ,
            freeModeMomentumRatio:0.2
        })
		
	}

	componentDidUpdate(){
        this.swiper.update()
    }
}


export default NewHeader