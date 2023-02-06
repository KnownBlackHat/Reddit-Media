import { Component } from "react";
import SearchIcon from "./SearchIcon";
export default class Navbar extends Component {
	render() {

		return (

			<form id="form" className="justify-between rounded items-center bg-gradient-to-t from-black to-blue-900  mx-auto my-2 flex space-x-14 p-4 sticky top-0" >
				<input id="search" autoComplete="off" placeholder="Topic" type="text" className="text-center rounded p-2 bg-white/30 w-[100%]" />


					<input id="speed" className="w-[5em] rounded p-2 bg-white/30" defaultValue="1" type="number" max="4" min="0.5" step="0.5" required />
					<button className="w-[5em]" type="submit">
						<SearchIcon />
					</button>
			</form>
		)
	}
}
