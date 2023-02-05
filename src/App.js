import { Component } from "react";
import Navbar from "./components/Navbar";
import VideoForm from "./components/NewsForm";

export default class App extends Component {
	constructor() {
		super()
		this.state = { topic: "memes", speed: 1, size: 10 }
	}

	render() {
		document.body.classList.add("bg-black", "text-white")

		document.addEventListener("readystatechange", () => { document.querySelector("#form").addEventListener("submit", () => { this.setState({ topic: document.querySelector("#search").value ? document.querySelector("#search").value : this.state.topic, speed: document.querySelector("#speed").value, size: document.querySelector("#size").value }) }) })

		return (
			<>

				<Navbar />
				<VideoForm key={this.state.topic + this.state.size} topic={this.state.topic} amount={this.state.size} speed={this.state.speed} />
			</>
		)
	}
}
