import "./App.css";
import React from "react";
import Name from "./components/name";
import Price from "./components/Price";
import Description from "./components/description";
import Card from "react-bootstrap/Card";
import { MyProduct } from "./product";
import myPic from "./pic.jpg"

let myName = "Achraf Souilem"
function App() {
  return ( 
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={MyProduct.Image} />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="center">
      {myName ? <h1>Hello {myName} !</h1> : <h1>Hello There !</h1>}
      {myName && <img src={myPic} alt="pic" style={{width:200}}></img>}
      </div>
    </div>
  );
}

export default App;
