import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItems from "./NewsItem";
import Spinner from "./Spinner";

export default class NewsForm extends Component {

	constructor(props) {
	super(props)
	this.state = { content: [] /*[{ "data": { "title": "[/r/PrimeSex] Luna Star is a naughty teacher", "url_overridden_by_dest": "https://redgifs.com/watch/prudentanchoredcottonmouth", "preview": { "reddit_video_preview": { "fallback_url": "https://v.redd.it/4kuu03po17ga1/DASH_480.mp4", } } } }]*/ }
	this.limit = this.props.amount
	}
	

	fetchMoreData= async () => {
		const url = `https://www.reddit.com/r/${this.props.topic}.json?limit=${parseInt(this.limit)+10}`
		this.limit += 10
		try {
			const data = await fetch(url)
			const parsedData = await data.json()
			this.setState({ content: parsedData.data.children, maxcontent: parsedData.data.dist })
		}

		catch { this.setState({ content: this.state.content || null,maxcontent: null, loading: false, error: "Unable To Find" }) }
	}


	async componentDidMount() {
		this.setState({ loading: true })
		const url = `https://www.reddit.com/r/${this.props.topic}.json?limit=${this.props.amount}`
		
		try {
			const data = await fetch(url)
			const parsedData = await data.json()
			this.setState({ content: parsedData.data.children, maxcontent: parsedData.data.dist, loading: false })
		}

		catch { this.setState({ content: this.state.content || null, maxcontent: null,loading: false, error: "Unable To Find" }) }
	}
	
	render() {
		return (
			<>
				{ this.state.loading ? <Spinner />: <div className="text-center text-white"> <strong>Topic: </strong>{this.props.topic} </div>}

				<div className="text-red-600 text-center font-bold">{this.state ? this.state.error : null}</div>

						<InfiniteScroll 
			dataLength={this.state.content.length}
			next={this.fetchMoreData}
			loader={<Spinner />}
			hasMore={this.state.content.length===0?false:this.state.content.length < 100}
			>
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 p-2 gap-4">
			


					{this.state && this.state.content && this.state.content.map((item, index) => {

						return <NewsItems

							tabIndex={index}
							
							key={index}

							headline={item.data.title}

							newslink={item.data.url}

							media={ item.data.preview && item.data.preview.reddit_video_preview &&item.data.preview.reddit_video_preview.fallback_url }

							image={item.data.url_overridden_by_dest}

							speed={this.props.speed}

						/>


					})}

			</div>
			</InfiniteScroll>


			</>
		)
	}
}
