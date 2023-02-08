import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import VideoForm from "./components/NewsForm";

export default function App () {
	const [topic,settopic] = useState("memes")
	const [speed,setspeed] = useState(1)
	const size = 8
	const [progress,setProgress] = useState(0)

	document.body.classList.add("bg-black", "text-white")

	return (
			<>

			<LoadingBar  height={3}  progress={progress} />
				<Navbar settopic={settopic} setspeed={setspeed} />
				<VideoForm setProgress={setProgress} key={topic} topic={topic} amount={size} speed={speed} />
			</>
		)
	}

