// Check For Links
data.data.after.slice(0,3) === "t3_"

// 							Video Fetcher Algorithm
//	is_video:true
data.data.children.forEach(item=>{item.data.is_video?console.log(item.data.media.reddit_video.fallback_url):console.log(item)})

// preview.reddit_video_preview
// beta
data.data.children.forEach(item=>{item.data.preview.reddit_video_preview.fallback_url || console.log(item)})
