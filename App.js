import React, { useState } from "react"

function App() {
	const [temperatureValue, setTemperatureValue] = useState(10)
	const [bgColor, setBgColor] = useState("neutral")
  

	// let newTemperature

	const increaseTemp = () => {
		if (temperatureValue === 30) {
			
      return
		}
		const newTemperature = temperatureValue + 1

		if (newTemperature >= 15) {
			setBgColor("hot")
		}

		setTemperatureValue(newTemperature)
	}
	const decreaseTemp = () => {
		if (temperatureValue === 0) {
			return
		}
		const newTemperature = temperatureValue - 1
		if (newTemperature < 15) {
			setBgColor("cold")
		}

		setTemperatureValue(newTemperature)
	}

	return (
    <React.Fragment>

		<div className='app-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${bgColor}`}>
					{temperatureValue}°C
				</div>
			</div>
			<div className='button-container'>
				<button onClick={increaseTemp}>+</button>
				<button onClick={decreaseTemp}>-</button>
			</div>
		</div>
   
    
    </React.Fragment>
	)
}

export default App
