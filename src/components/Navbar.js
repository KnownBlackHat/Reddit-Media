import SearchIcon from "./SearchIcon";
import { useRef } from "react";
import SearchBar from './Searchbar'

export default function Navbar ({setquery,setspeed,setsubreddit}) {
	const search = useRef()
	const speed = useRef()
	const subreddit_inp = useRef()
	return (
<>
			<form id="form" 
			onSubmit={ (e)=>{ setquery(search.current.value); setspeed(speed.current.value); subreddit_inp.current.value && setsubreddit(subreddit_inp.current.value); e.preventDefault() } } 
			className="justify-between rounded items-center bg-gradient-to-t from-black to-blue-900  mx-auto my-2 flex space-x-14 p-4 sticky top-0" >
				<input id="search" ref={search} autoComplete="off" placeholder="Topic" type="search" className="text-center rounded p-2 bg-white/30 w-[100%]" />

			<SearchBar placeholder="Subreddit" subreddit_inp={subreddit_inp}/>

					<input id="speed" ref={speed} className="w-[5em] rounded p-2 bg-white/30" defaultValue="1" type="number" max="4" min="0.5" step="0.5" required />
					<button className="w-[5em]" type="submit">
						<SearchIcon  />
					</button>
			</form>

</>
		)
	}
