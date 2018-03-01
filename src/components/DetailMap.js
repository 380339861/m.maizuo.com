import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch,withRouter} from 'react-router-dom';
import axios from "axios"
import "../css/cinema.css"
import "../css/detailMap.css"

class DetailMap extends Component {
	constructor(){
		super();
		this.state={
			mapslists:[],
			mapflag:false,
			datamoves:[]
		}
		this.upchang = this.upchang.bind(this)
	}
	componentDidMount(){
		axios.get("/v4/api/film/4000/cinema?__t=1519799176247")
		.then((res)=>{
			console.log(res)
			this.setState({
				mapslists:res.data.data.cinemas
			})
		})
		
	}
	upchang(index,items){
	      console.log(index)
	      if(document.getElementsByClassName("zuidaul")[index].style.overflow == "hidden" || document.getElementsByClassName("zuidaul")[index].style.height == "118px"){
	      	document.getElementsByClassName("zuidaul")[index].style.overflow = ""
	     	document.getElementsByClassName("zuidaul")[index].style.height = "100%"
	      }else{
	      	document.getElementsByClassName("zuidaul")[index].style.overflow = "hidden"
	     	document.getElementsByClassName("zuidaul")[index].style.height = "118px"
	      }
	      console.log(items)
	      axios.get(`/v4/api/schedule?__t=1519825936585&film=${this.props.match.params.fib}&cinema=${items}`)
			.then((res)=>{
				console.log(res)
				this.setState({
					datamoves:res.data.data.cinemas
				})
			})
		
		console.log(this.state.datamoves)
 	}
	render() {
		var that = this
		return (
			<ul className="mapsul">
			{
				this.state.mapslists.map(function(items,index){
					return (
					<div key={items.id} className="zuidaul">
						<li>
							<div className="cinema-wrap"  onClick={()=>that.upchang(index,items.id)}>
								<div className="cinema clearfix">
									<div className="cinema-title">
										<div className="cinema-title-cinemaname">
											<i>{items.name}</i>
											<i className="iconfont icon-zuo book"></i>
											<i className="iconfont icon-tong ticket"></i>
										</div>
										
										<span className="cinema-title-tip"></span>
										<span className="cinema-title-address">
											<span>{items.address}</span>
											<span></span>
										</span>
										<div className="cinema-title-location">
											<span>距离</span>
											<span></span>
										</div>
									</div>
										<span className="pull-right nav">
											<i className="iconfont icon-arrow-right book"></i>
										</span>
								</div>
							</div>
						</li>
						<div className="cinema-schedule-wrap clearfix">
							<div className="cinema-schedule-date" >
								<div className="schedule-date-item active" >今天(02/28)</div>
								<div className="schedule-date-item ">明天(03/01)</div>
								<div className="schedule-date-item ">后天(03/02)</div>
								<div className="schedule-date-item ">3天后(03/03)</div>
								<div className="schedule-date-item ">4天后(03/04)</div>
							</div>
				
								<div className="cinema-schedule-list">
									<div className="schedule-detail">
										<div className="schedule-detail-item">
											<div className="schedule-detail-wrap clearfix">
												<div className="schedule-detail-arrow">
													<i className="iconfont icon-arrow-right"></i>
												</div>
												<div className="schedule-detail-left clearfix">
													<div className="schedule-detail-price">
														<span>￥43</span>
													</div>
													<span></span>
													<div className="schedule-detail-showtime" >20:25</div>
													<div className="schedule-detail-des" >预计22:00结束/英语2D/VIP60帧激光厅</div>
													<div className="schedule-detail-origin-price">￥120.00</div>
												</div>
												<div className="schedule-detail-left clearfix">
													<div className="schedule-detail-price">
														<span>￥42</span>
													</div>
													<span></span>
													<div className="schedule-detail-showtime" >20:25</div>
													<div className="schedule-detail-des" >预计22:00结束/英语2D/VIP60帧激光厅</div>
													<div className="schedule-detail-origin-price">￥120.00</div>
												</div>
												<div className="schedule-detail-left clearfix">
													<div className="schedule-detail-price">
														<span>￥79</span>
													</div>
													<span></span>
													<div className="schedule-detail-showtime" >20:25</div>
													<div className="schedule-detail-des" >预计22:00结束/英语3D/VIP60帧激光厅</div>
													<div className="schedule-detail-origin-price">￥120.00</div>
												</div>
											</div>
										</div>
									</div>
								</div>
						
						</div>
					</div>	
					)
				})
				
			}	
			</ul>
		)
	}
}

export default withRouter(DetailMap)
