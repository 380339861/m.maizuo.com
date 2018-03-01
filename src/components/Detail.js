import React, {
	Component
} from "react"
import axios from "axios"
import "../css/detail.css";

export default class Detail extends Component {
	constructor() {
		super()
		this.state = {
			lists: [],
			imgUrl: [],
			actors:[]
		}
		this.nameNextTick = this.nameNextTick.bind(this)
	}
	componentDidMount() {
		axios.get(`/v4/api/film/${this.props.match.params.fid}?__t=1519626152009`)
			.then((res) => {
				console.log(res)
				this.setState({
					lists: res.data.data.film,
					actors: res.data.data.film.actors,
					imgurl: res.data.data.film.cover.origin
				})
				console.log(this.state.lists.cover.origin)
			})
	}
	nameNextTick(){
		this.props.history.push("/detailMap/" + this.state.lists.id)
	}
	render() {
		return(
			<div>
				<div key={this.state.lists.name}>
					<img src={this.state.imgurl} className="detalimg"/>
					<div className="film-word1">影片简介</div>
					<div className="film-word2">
						<span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
						<span>{this.state.lists.director}</span>
					</div>
					<div className="film-word2">
						<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
						<span>
						{
							this.state.actors.map(function(items,index){
								return(
									items.name+" | "
								)
							})
						}
						</span>
					</div>
				</div>	
				<div className="film-word2">
					<span>地区语言：</span>
					<span>{this.state.lists.nation}</span>
					<span>(</span><span>{this.state.lists.language}</span><span >)</span></div>
					<div className="film-word2"><span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
					<span>{this.state.lists.category}</span>
				</div>
					<div className="film-word2">
						<span >上映日期：</span>
						<span>2016年上映</span>
						<div className="film-word3"> 
						{this.state.lists.synopsis}</div>
					</div>
					<div className="film-word3">{this.state.lists.synopsis}</div>
					
					<div className="operation"><button className="cpn-primary-button" onClick={this.nameNextTick}>立即购票</button></div>
			</div>
		)
	}
}