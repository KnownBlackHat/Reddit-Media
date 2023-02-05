import { Component } from "react";
import SearchIcon from "./SearchIcon";
export default class Navbar extends Component {
	render() {

		return (

			<form id="form" className="container justify-between rounded items-center bg-gradient-to-t from-black to-blue-900  mx-auto my-2 flex flex-col p-2" onSubmit={(e) => { e.preventDefault() }}>
				<input id="search" autoComplete="off" placeholder="Topic" type="text" className="text-center rounded p-2 bg-white/30 w-[100%]" />

				<div className="flex my-2 justify-between w-[100%] items-center">

					<span >Speed: <input id="speed" className="w-[5em] rounded p-2 bg-white/30" defaultValue="1" type="number" max="4" min="1" required />
					</span>
					<span>
						Amount: <input id="size" className="w-[5em] rounded  p-2 bg-white/30" defaultValue="10" type="number" max="100" min="10" step="10" required />
					</span>
					<button type="submit">
						<SearchIcon />
					</button>
				</div>
			</form>
		)
	}
}
