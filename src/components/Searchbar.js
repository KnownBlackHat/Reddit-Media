import {useState, useEffect, useRef} from "react"

export default function Navbar ({placeholder,subreddit_inp}) {

const [search_box,setsearch_box] = useState('')
const [suggestion,setsuggestion] = useState([])
useEffect(()=>{
	const fetchsuggestion = async ()=>{
		let data= await fetch(`https://www.reddit.com/api/search_reddit_names.json?query=${search_box}&include_over_18=true`)
		data = await data.json()
		setsuggestion(data.names?data.names:[])
	}

	search_box && fetchsuggestion()
},[search_box])

return (
<div>
	<div id="input_box">
		<input type="search" ref={subreddit_inp} className="text-center rounded p-2 bg-white/30 w-[100%]" value={search_box} onChange={e=>{setsearch_box(e.target.value)}} placeholder={placeholder} /> 
	</div>
	{ suggestion.length > 0 && search_box.length > 0 &&
	<div  id="suggestion_data" className="absolute text-center bg-blue-700 rounded overflow-y-scroll mt-1 border-2 border-b-0">
		<ul className="cursor-pointer">
			{suggestion.map((item,index)=>{
				return(
					<li key={index} onBlur={()=>{console.log('hi')}} className="p-2 border-b-2" onClick={()=>{ setsearch_box(item);setsuggestion([]); subreddit_inp.current.focus() }} >{item}</li>
				)
			})}
		</ul>
	</div>}
</div>
)
}
