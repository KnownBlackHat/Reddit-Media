import SearchIcon from "./SearchIcon";
import { useRef } from "react";
import SearchBar from './Searchbar'

export default function Navbar ({setquery,setspeed,setsubreddit,unsafe_filter,setunsafe_filter}) {
	const search = useRef()
	const speed = useRef()
	const subreddit_inp = useRef()
	return (
<>
			<form id="form" 
			onSubmit={ (e)=>{
				console.log("Form Submited")
				e.preventDefault();
			 setquery(search.current.value); setspeed(speed.current.value); subreddit_inp.current.value && setsubreddit(subreddit_inp.current.value) 

		} }


			className="z-10 justify-between rounded items-center bg-gradient-to-t from-black to-blue-900  mx-auto my-2 flex space-x-14 p-4 sticky top-0" >
				<div id="query" className="flex items-center space-x-2">
				 <input id="search" ref={search} autoComplete="off" placeholder="Topic" type="search" className="text-center rounded p-2 bg-white/30 w-[100%]" />
				<button  className={`text-center rounded p-1 h-10 bg-${unsafe_filter?'red':'green'}-600/70  text-xs`} 
		

		onClick={ e=>{
			e.preventDefault();
			e.stopPropagation();
		}}



		onMouseDown={
			(e)=>{
				e.preventDefault();
				e.stopPropagation();
				setunsafe_filter(unsafe_filter?false:true)
		}}
		> {unsafe_filter?'unsafe':'safe'}
				</button>
				</div>

			<SearchBar unsafe_filter={unsafe_filter} placeholder="Subreddit" subreddit_inp={subreddit_inp}/>

					<input id="speed" ref={speed} className="w-[5em] rounded p-2 bg-white/30" defaultValue="1" type="number" max="4" min="0.5" step="0.5" required />
					<button className="w-[5em]" type="submit">
						<SearchIcon  />
					</button>
			</form>

</>
		)
	}
