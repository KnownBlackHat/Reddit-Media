import { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItems from "./NewsItem";
import Spinner from "./Spinner";

export default function NewsForm (props) {

	const [content,setcontent] = useState([])
	const [limit,setlimit] = useState(props.amount)
	const [loading,setloading] = useState(false)
	const [error,seterror] = useState(null)
	const prop = useRef(props)

	const fetchMoreData= async () => {
		const url = `https://www.reddit.com/r/${props.topic}.json?limit=${parseInt(limit)+8}`
		setlimit(limit+8)
		try {
			const data = await fetch(url)
			const parsedData = await data.json()
			setcontent(parsedData.data.children)
		}

		catch { 
			seterror("Unable To Find")
	}}

	useEffect(()=>{
	const fetchinit = async ()=>{
		prop.current.setProgress(10)
		setloading(true)
		const url = `https://www.reddit.com/r/${prop.current.topic}.json?limit=${prop.current.amount}`
		prop.current.setProgress(40)
		try {
			const data = await fetch(url)
			prop.current.setProgress(60)
			const parsedData = await data.json()
			prop.current.setProgress(80)
			setcontent(parsedData.data.children)
			prop.current.setProgress(100)
			setloading(false)
		}

		catch { 
			setloading(false)
			seterror("Unable To Find")
			prop.current.setProgress(100)
	}}

		fetchinit()
	},[prop])
	
			return (
			<>
				{ loading ? <Spinner />: <div className="text-center text-white"> <strong>Topic: </strong>{props.topic} </div>}

				<div className="text-red-600 text-center font-bold">{error}</div>

						<InfiniteScroll 
			dataLength={content.length}
			next={fetchMoreData}
			loader={<Spinner />}
			hasMore={content.length===0?false:content.length < 100}
			>
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 p-2 gap-4">
			


					{content && content.map((item, index) => {

						return <NewsItems

							tabIndex={index}
							
							key={index}

							headline={item.data.title}

							newslink={item.data.url}

							media={ item.data.preview && item.data.preview.reddit_video_preview &&item.data.preview.reddit_video_preview.fallback_url }

							image={item.data.url_overridden_by_dest}

							speed={props.speed}

						/>


					})}

			</div>
			</InfiniteScroll>


			</>
		)
	}
