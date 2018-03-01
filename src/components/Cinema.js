import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch} from 'react-router-dom';
import axios from "axios"
import "../css/cinema.css"

export default class Home extends Component {
	constructor(){
		super();
		this.state={
			mapslists:[]
		}
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
	render() {
		return (
			<ul className="mapsul">
			{
				this.state.mapslists.map(function(items,index){
					return (
						<li key={items.id}>
							
							<div className="cinema-wrap">
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
											<span>未知</span>
										</div>
									</div>
										<span className="pull-right nav">
											<i className="iconfont icon-arrow-right book"></i>
										</span>
								</div>
							</div>
						</li>
					)
				})
				
			}	
			</ul>
		)
	}
}