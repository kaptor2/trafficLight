export class TrafficLight {

	constructor(trafficCells) {
		this.obj = document.querySelectorAll(trafficCells)
		this.COLLORS = ["SpringGreen", "yellow", "red"];
	}

	setState(state) {
		for (let i = 0; i < this.obj.length; i++) {
			this.obj[i].style.cssText =
				i == state
					? `background-color: ${this.COLLORS[state]}`
					: `background-color: black`;
		}
	}
} 