import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const APIKEY = "b3aeea4d5a7aa6196ff809fc4242fa34"

class App extends React.Component {

  gettingWeather = async (event) => {
    event.preventDefault()
    const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${APIKEY}`)
    const data = api_url.json()
    console.log(data)
  }


  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather}/>
        <Weather />
      </div>
    )  
  }
}

export default App 