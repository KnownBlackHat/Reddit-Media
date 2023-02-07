import { Component } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import VideoForm from "./components/NewsForm";

export default class App extends Component {
	constructor() {
		super()
		this.state = { topic: "memes", speed: 1, size: 8, progress: 0 }
	}

	setProgress = (progress)=>{
		this.setState({progress: progress})
	}

	render() {
		document.body.classList.add("bg-black", "text-white")

		document.addEventListener("readystatechange", () => { document.querySelector("#form").addEventListener("submit", (e) => { this.setState({ topic: document.querySelector("#search").value ? document.querySelector("#search").value : this.state.topic, speed: document.querySelector("#speed").value}) ; e.preventDefault()}) })

		return (
			<>

			<LoadingBar  height={3}  progress={this.state.progress} />
				<Navbar />
				<VideoForm setProgress={this.setProgress }key={this.state.topic} topic={this.state.topic} amount={this.state.size} speed={this.state.speed} />
			</>
		)
	}
}
