import {useState, useEffect, useRef} from "react"

export default function Navbar ({placeholder,subreddit_inp}) {

const [search_box,setsearch_box] = useState('')
const [suggestion,setsuggestion] = useState([])
const dropdown = useRef()
const [isLoaded,setisLoaded] = useState(false)
useEffect(()=>{
	const fetchsuggestion = async ()=>{
		setisLoaded(false)
		let data= await fetch(`https://www.reddit.com/api/search_reddit_names.json?query=${search_box}&include_over_18=true`)
		data = await data.json()
		setsuggestion(data.names?data.names:[])
		setisLoaded(true)
	}

	search_box && fetchsuggestion()
},[search_box])

useEffect(()=>{
	document.addEventListener("click",()=>{
		dropdown.current.style.display = "none";
	})
	subreddit_inp.current.addEventListener("click",e=>{
		e.stopPropagation()
		dropdown.current.style.display = "block";
	})
}
,[subreddit_inp])

return (
<div>
	<div id="input_box">
		<input type="search" ref={subreddit_inp} className="text-center rounded p-2 bg-white/30 w-[100%]" value={search_box} onChange={e=>{setsearch_box(e.target.value)}} placeholder={placeholder} /> 
	</div>
	<span ref={dropdown}>
	{ search_box.length > 0 &&
	<div id="suggestion_data" className="absolute text-center bg-blue-700 rounded overflow-y-scroll mt-1 border-2 border-b-0">
		{!suggestion.length>0?(!isLoaded?<span className="p-4 pb-0 border-b-2">Searching...</span>:<span className="p-4 pb-0 border-b-2">No result Found</span>):null} 
		<ul className="cursor-pointer">
			{suggestion.map((item,index)=>{
				return(
					<li key={index} className="p-2 border-b-2" onClick={()=>{ setsearch_box(item); subreddit_inp.current.focus() }} >{item}</li>
				)
			})}
		</ul>
	</div>}
	</span>
	</div>
)
}
