import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "b3aeea4d5a7aa6196ff809fc4242fa34";


class App extends React.Component {
  
gettingWeather = async () => {
  const api_url = await 
  fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
  const data = await api_url.json()
  console.log()
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