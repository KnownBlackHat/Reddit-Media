// Test for algorithms
// url = await Algorithm_video_1("https://www.reddit.com/r/memes.json?limit=32&include_over_18=true&type=link&raw_json=1")
// url = await Algorithm_video_2(url.links,url.error)
// url = await Algorithm_image_1(url.links,url.error)
// url = await Algorithm_image_2(url.links,url.error)
// url = await Algorithm_image_3(url.links,url.error)
// url = await Algorithm_image_4(url.links,url.error)

// Alogrithm 1 (is_video: True) [ returns links['links'] , error[ {...} ] ]
const Algorithm_video_1 = async (url) => {
	const error=[]
	const links=[]
	let data = await ( await fetch(url) ).json()
	data.data.children.forEach(item=>{
		item.data.is_video?links.push(item.data.media.reddit_video.fallback_url):error.push(item.data)
	})  
	return { links: links, error: error }
}

// Algorithm 2 (is_video: False) [ recieves links["link"], error[ {...} ] and returns links['links'] , error[ {...} ] ]
const Algorithm_video_2 = async (links_array,error_array) => {	
	const error = []
	error_array.forEach(item=>{ 
	try {
		links_array.push(item.preview.reddit_video_preview.fallback_url) 
		}
	catch (e){
		error.push(item)
		}
	})
	return { links: links_array, error: error }
}

// Algorithm 3  [ recieves links["link"], error[ {...} ] and returns links['links'] , error[ {...} ] ]
const Algorithm_image_1 = async (links_array,error_array) => {	
	const error = []
	error_array.forEach(item=>{ 
	try {
		item.url.match(/.*\.(gif|gifv|jpg|png|jpeg)$/)?links_array.push(item.url):error.push(item)
		}
	catch (e){
		error.push(item)
		}
	})
	return { links: links_array, error: error }
}


// Algorithm 4  [ recieves links["link"], error[ {...} ] and returns links['links'] , error[ {...} ] ]
const Algorithm_image_2 = async (links_array,error_array) => {	
	const error = []
	error_array.forEach(item=>{ 
	try {
		links_array.push(item.preview.images[0].source.url) 
		}
	catch (e){
		error.push(item)
		}
	})
	return { links: links_array, error: error }
}


// Algorithm 5  [ recieves links["link"], error[ {...} ] and returns links['links'] , error[ {...} ] ]
const Algorithm_image_3 = async (links_array,error_array) => {	
	const error = []
	error_array.forEach(item=>{ 
	try {
		links_array.push(item.preview.images[0].variants.gif.url?item.preview.images[0].variants.gif.url:error.push(item)) 
		}
	catch (e){
		error.push(item)
		}
	})
	return { links: links_array, error: error }
}


// Algorithm 6  [ recieves links["link"], error[ {...} ] and returns links['links'] , error[ {...} ] ]
const Algorithm_image_4 = async (links_array,error_array) => {	
	const error = []
	error_array.forEach(item=>{ 
	try {
		links_array.push(item.thumbnail?item.thumbnail:null) 
		}
	catch (e){
		error.push(item)
		}
	})
	return { links: links_array, error: error }
}
