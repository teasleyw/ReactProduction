/* eslint no-restricted-globals: 1 */
export default() => {
	// the timer ID of the interval
	self.timerID = null

	// the interval time in milliseconds
	self.interval = 100
	//post message event handler
	self.onmessage = (message) => {
		console.log(message.data.message)
		switch (message.data.message) {
			case "start":
				self.start()
				break
			case "stop":
				self.stop()
				break
			case "interval":
				self.changeInterval(self.interval)
				break
			case "close":
				self.stop()
				self.close()
				break
		}
	  };
	

	// starts the timer
	self.start = () => {
		console.log("here")
		self.timerID = setInterval(self.tick, self.interval)
	}

	// stops the interval
	self.stop = () => {
		clearInterval(self.timerID)
		self.timerID = null
	}

	// stops the timer, changes the interval and starts timer again
	self.changeInterval = (interval) => {
		self.interval = interval
		if (self.timerID) {
			self.stop()
			self.start()
		}
	}

	// posts the tick message
	self.tick = () => {
		postMessage("tick")
	}

}
