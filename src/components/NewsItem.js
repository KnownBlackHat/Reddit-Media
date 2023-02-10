import { useRef } from "react";
export default function NewsItems (props) {
		const { image, media, headline, newslink, speed } = props
		const video = useRef()

		return (
			<div className="container bg-gradient-to-r from-black to-blue-800 overflow-y-scroll border-2 border-white rounded h-fit mx-auto flex flex-col" 

			onFocus={() => { video.current && !video.current.classList.contains("fixed") &&  video.current.play(); video.current && (video.current.playbackRate = speed) }}

			onBlur={() => {  video.current && !video.current.classList.contains("fixed") && video.current.pause() }}

			onMouseEnter={() => { video.current && video.current.focus()}}>
			
			
				{media ?
				<>
			<div className="flex justify-end"> <span className="bg-red-600 absolute rounded p-1 text-xs"> Video </span> </div>
					<video defer ref={video}
						preload="auto" 
						onError={(e) => { e.target.onerror = null; e.target.src = "https://st4.depositphotos.com/1760000/26984/v/600/depositphotos_269846914-stock-video-neon-frame-light-on-brick.mp4" }}
						loop
						onClick={(e) => {document.body.classList.add("overflow-y-hidden"); 
							e.target.classList.add("fixed", "inset-0", "w-screen", "h-screen","z-20"); e.target.controls = "controls"; e.target.play() ; let element = document.createElement("span"); document.addEventListener("keydown", (key)=>{key.code==="KeyF" && element.click()}); element.classList.add("fixed", "top-0", "right-0", "p-2", "mx-4", "my-2", "cursor-pointer","z-20"); element.innerHTML = '<svg class="h-10 md:h-[4rem] w-fit" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72px" height="72px" viewBox="0,0,256,256"><g fill="#2300ff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(3.55556,3.55556)"><path d="M58,29.5v13c0,14.375 -1.125,15.5 -15.5,15.5h-13c-14.375,0 -15.5,-1.125 -15.5,-15.5v-13c0,-14.375 1.125,-15.5 15.5,-15.5h13c14.375,0 15.5,1.125 15.5,15.5zM45.485,41.243c-0.254,-0.254 -2.542,-2.543 -5.242,-5.243c2.7,-2.7 4.989,-4.989 5.243,-5.243c1.171,-1.171 1.172,-3.071 0,-4.243c-1.172,-1.172 -3.071,-1.172 -4.243,0c-0.254,0.255 -2.543,2.543 -5.243,5.243c-2.7,-2.7 -4.989,-4.989 -5.243,-5.243c-1.171,-1.172 -3.071,-1.172 -4.243,0c-1.172,1.172 -1.171,3.071 0,4.243c0.254,0.254 2.542,2.542 5.243,5.243c-2.7,2.7 -4.989,4.989 -5.243,5.243c-1.171,1.172 -1.172,3.071 0,4.243c1.172,1.172 3.071,1.171 4.243,0c0.254,-0.254 2.542,-2.542 5.243,-5.243c2.7,2.7 4.989,4.989 5.243,5.243c1.171,1.171 3.071,1.172 4.243,0c1.171,-1.172 1.171,-3.072 -0.001,-4.243z"></path></g></g></svg>'; element.addEventListener("click", () => { e.target.pause(); e.target.classList.remove("fixed", "inset-0", "w-screen", "h-screen","z-20"); e.target.controls = null; document.body.classList.remove("overflow-y-hidden"); element.remove(); }); document.body.append(element);

						}}

						className="rounded h-[15em] w-[100%] bg-black" src={media} alt="Failed to load" /></>
					:
						<div className="bg-black inset-0"> <img
					preload="auto" defer
					onClick={(e) => {document.body.classList.add("overflow-y-hidden") ;
 
  e.target.classList.add("h-screen","z-20");
  e.target.parentElement.classList.add("fixed","z-20");
  let element = document.createElement("span") ;
 
  element.classList.add("fixed", "top-0", "right-0", "p-2", "mx-4", "my-2", "cursor-pointer","z-20") ;
						document.addEventListener("keydown", (key)=>{key.code==="KeyF" && element.click()});
  element.innerHTML = '<svg class="h-10 md:h-[4rem] w-fit" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72px" height="72px" viewBox="0,0,256,256"><g fill="#2300ff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(3.55556,3.55556)"><path d="M58,29.5v13c0,14.375 -1.125,15.5 -15.5,15.5h-13c-14.375,0 -15.5,-1.125 -15.5,-15.5v-13c0,-14.375 1.125,-15.5 15.5,-15.5h13c14.375,0 15.5,1.125 15.5,15.5zM45.485,41.243c-0.254,-0.254 -2.542,-2.543 -5.242,-5.243c2.7,-2.7 4.989,-4.989 5.243,-5.243c1.171,-1.171 1.172,-3.071 0,-4.243c-1.172,-1.172 -3.071,-1.172 -4.243,0c-0.254,0.255 -2.543,2.543 -5.243,5.243c-2.7,-2.7 -4.989,-4.989 -5.243,-5.243c-1.171,-1.172 -3.071,-1.172 -4.243,0c-1.172,1.172 -1.171,3.071 0,4.243c0.254,0.254 2.542,2.542 5.243,5.243c-2.7,2.7 -4.989,4.989 -5.243,5.243c-1.171,1.172 -1.172,3.071 0,4.243c1.172,1.172 3.071,1.171 4.243,0c0.254,-0.254 2.542,-2.542 5.243,-5.243c2.7,2.7 4.989,4.989 5.243,5.243c1.171,1.171 3.071,1.172 4.243,0c1.171,-1.172 1.171,-3.072 -0.001,-4.243z"></path></g></g></svg>' ;
 
  element.addEventListener("click", () => { e.target.classList.remove("h-screen","h-20") ;
	  e.target.parentElement.classList.remove("fixed","z-20")
  e.target.controls = null ;
 
  document.body.classList.remove("overflow-y-hidden") ;
 
  element.remove() ;
 
  }) ;
 
  document.body.append(element) ;
 
 

						}}

					 src={image ? image : "https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif"} alt="Failed to Load" onError={(e) => { e.target.onerror = null; e.target.src = "https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif" }} className="rounded  h-[15em] mx-auto bg-black" /></div>}

				<div className="brief p-2 text-sm md:text-lg text-white">
					<div className="heading p-2 m-2 font-bold "> {headline} </div>
				</div>

				<div className="text-white text-center mb-4"><a className="p-2 bg-blue-700 rounded" href={newslink} target="_blank" rel="noreferrer">Visit Me</a></div>
			</div>
		)
	}

