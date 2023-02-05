import { Component } from "react";

export default class NewsItems extends Component {
	render() {
		const { image, media, headline, newslink, speed } = this.props
		return (
			<div className="container bg-gradient-to-r from-black to-blue-800 overflow-y-scroll border-2 border-white rounded h-fit mx-auto flex flex-col">
				{media ?
					<video
						onError={(e) => { e.target.onerror = null; e.target.src = "https://st4.depositphotos.com/1760000/26984/v/600/depositphotos_269846914-stock-video-neon-frame-light-on-brick.mp4" }}

						loop

						// onFocus={(e) => { e.target.play(); e.target.playbackRate = speed }}

						// onBlur={(e) => { e.target.pause() }}


						onMouseEnter={(e) => { e.target.play(); e.target.playbackRate = speed }}

						onMouseLeave={(e) => { e.target.pause() }}

						onClick={(e) => {
							e.target.classList.add("absolute", "inset-0", "w-screen", "h-screen", "bg-black"); e.target.controls = "controls"; document.body.classList.add("overflow-y-hidden"); window.scrollTo(0, 0); let element = document.createElement("span"); element.classList.add("absolute", "top-0", "right-0", "p-2", "mx-4", "my-2", "cursor-pointer"); element.innerHTML = '<svg class="h-10 md:h-[4rem]" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72px" height="72px" viewBox="0,0,256,256"><g fill="#2300ff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(3.55556,3.55556)"><path d="M58,29.5v13c0,14.375 -1.125,15.5 -15.5,15.5h-13c-14.375,0 -15.5,-1.125 -15.5,-15.5v-13c0,-14.375 1.125,-15.5 15.5,-15.5h13c14.375,0 15.5,1.125 15.5,15.5zM45.485,41.243c-0.254,-0.254 -2.542,-2.543 -5.242,-5.243c2.7,-2.7 4.989,-4.989 5.243,-5.243c1.171,-1.171 1.172,-3.071 0,-4.243c-1.172,-1.172 -3.071,-1.172 -4.243,0c-0.254,0.255 -2.543,2.543 -5.243,5.243c-2.7,-2.7 -4.989,-4.989 -5.243,-5.243c-1.171,-1.172 -3.071,-1.172 -4.243,0c-1.172,1.172 -1.171,3.071 0,4.243c0.254,0.254 2.542,2.542 5.243,5.243c-2.7,2.7 -4.989,4.989 -5.243,5.243c-1.171,1.172 -1.172,3.071 0,4.243c1.172,1.172 3.071,1.171 4.243,0c0.254,-0.254 2.542,-2.542 5.243,-5.243c2.7,2.7 4.989,4.989 5.243,5.243c1.171,1.171 3.071,1.172 4.243,0c1.171,-1.172 1.171,-3.072 -0.001,-4.243z"></path></g></g></svg>'; element.addEventListener("click", () => { e.target.classList.remove("absolute", "inset-0", "w-screen", "h-screen", "bg-black"); e.target.controls = null; document.body.classList.remove("overflow-y-hidden"); element.remove(); }); document.body.append(element);

						}}

						className="rounded" src={media} alt="Failed to load" />
					:
					<img src={image ? image : "https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif"} alt="Failed to Load" onError={(e) => { e.target.onerror = null; e.target.src = "https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif" }} className="rounded" />}

				<div className="brief p-2 text-white">
					<div className="heading p-2 m-2 font-bold "> {headline} </div>
				</div>

				<div className="text-white text-center mb-4"><a className="p-2 bg-blue-700 rounded" href={newslink} target="_blank" rel="noreferrer">Visit Me</a></div>
			</div>
		)
	}
}
