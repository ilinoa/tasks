import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "b3aeea4d5a7aa6196ff809fc4242fa34";

class App extends React.Component {

  gettingWeather = async (event) => {
    event.preventDefault()
    const api_url = await 
    fetch(`samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
    var data = await api_url.json()
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