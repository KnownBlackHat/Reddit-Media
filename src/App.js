import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import VideoForm from "./components/NewsForm";


export default function App () {
	const [query,setquery] = useState('') 
	const [subreddit,setsubreddit] = useState("memes")
	const [speed,setspeed] = useState(1)
	const size = 32
	const [unsafe_filter,setunsafe_filter] = useState(false)
	const [progress,setProgress] = useState(0)
	document.title="Reddit Media Locater"
	document.body.classList.add("bg-black", "text-white")

	return (
			<>

			<LoadingBar  height={3}  progress={progress} />
				<Navbar unsafe_filter={unsafe_filter} setunsafe_filter={setunsafe_filter} setquery={setquery} setspeed={setspeed} setsubreddit={setsubreddit} />
            
                <div className="text-center text-white rounded font-bold bg-yellow-500">
                    We Have a discord server! <a href="https://discord.gg/2uYRT2KmBU" className="text-blue-500">Join Now</a>
        <br />
                    Give feedback on our discord server and get the latest updates!
                </div>

				<VideoForm unsafe_filter={unsafe_filter} setProgress={setProgress} key={query.concat(subreddit)} amount={size} speed={speed} query={query} subreddit={subreddit}/>

			</>
		)
	}

