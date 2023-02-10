import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import VideoForm from "./components/NewsForm";


export default function App () {
	const [query,setquery] = useState('') 
	const [subreddit,setsubreddit] = useState("memes")
	const [speed,setspeed] = useState(1)
	const size = 32
	const [progress,setProgress] = useState(0)
	document.title="Reddit Media Locater"
	document.body.classList.add("bg-black", "text-white")

	return (
			<>

			<LoadingBar  height={3}  progress={progress} />
				<Navbar setquery={setquery} setspeed={setspeed} setsubreddit={setsubreddit} />

				<VideoForm setProgress={setProgress} key={query.concat(subreddit)} amount={size} speed={speed} query={query} subreddit={subreddit}/>

			</>
		)
	}

