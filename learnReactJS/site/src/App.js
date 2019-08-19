import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

const PLACES = [
  { name: "Saint Petersburg",  zip: "498817" },
  { name: "Kolpino",   zip: "546105" },
  { name: "Pushkino",   zip: "503977" },
  { name: "Yekaterinburg", zip: "1486209" }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      
    <div className="App">
       <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        React Simple Weather App
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>

      {
        PLACES.map((place, index) => ( 
          <button
          key={index}
          onClick={() => {
            this.setState({ activePlace: index });
            // var my = {a: index,b: place.zip,c: place.name}
            // console.log(my)
          }}
          >
            {place.name}
          </button>
        ))
      }     
      <Info
          key={activePlace}
          zip={PLACES[activePlace].name}
          /> 
    </div>
    )  
  }
}
export default App 