import React from "react"

class Info extends React.Component {
	constructor() {
		super();
		this.state = {
		  weatherData: null
		};
	  }

	  
	  componentDidMount() {
		const zip = this.props.zip;
		const URL = "http://api.openweathermap.org/data/2.5/weather?q=" + 
			zip +
		  	"&appid=b3aeea4d5a7aa6196ff809fc4242fa34&units=imperial";
		fetch(URL).then(res => res.json()).then(json => {
		  	this.setState({ weatherData: json });
		});
	  }
	  render() {
		const weatherData = this.state.weatherData;
		if (!weatherData) return <div>Loading</div>;
		// return <div>{JSON.stringify(weatherData)}</div>;
		
		const weather = weatherData.weather[0];
		const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
		var temp 	= ((weatherData.main.temp) - 32) * 5/9 
		var temp_max = ((weatherData.main.temp_max) - 32) * 5/9 
		var temp_min = ((weatherData.main.temp_min) - 32) * 5/9 
		return (
		<div>
			<h1>
			{weather.main} in {weatherData.name}
			<img src={iconUrl} alt={weatherData.description} /> 
			</h1>

			<p>Current: {temp.toFixed(1)}°</p>
			<p>High: {temp_max.toFixed(1)}°</p>
			<p>Low: {temp_min.toFixed(1)}°</p>
			<p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
		</div>
		);	
	}	  
}

export default Info