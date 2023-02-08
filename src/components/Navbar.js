import SearchIcon from "./SearchIcon";
import { useRef } from "react";

export default function Navbar ({settopic,setspeed}) {
	const search = useRef()
	const speed = useRef()
		return (

			<form id="form" 
			onSubmit={ (e)=>{ search.current.value.length>0 && settopic(search.current.value); setspeed(speed.current.value); e.preventDefault() } } 
			className="justify-between rounded items-center bg-gradient-to-t from-black to-blue-900  mx-auto my-2 flex space-x-14 p-4 sticky top-0" >
				<input id="search" ref={search} autoComplete="off" placeholder="Topic" type="text" className="text-center rounded p-2 bg-white/30 w-[100%]" />


					<input id="speed" ref={speed} className="w-[5em] rounded p-2 bg-white/30" defaultValue="1" type="number" max="4" min="0.5" step="0.5" required />
					<button className="w-[5em]" type="submit">
						<SearchIcon />
					</button>
			</form>
		)
	}
