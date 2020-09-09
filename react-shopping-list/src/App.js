import React from "react";
import ShoppingApp from "./components/ShoppingApp"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ma liste des course</h1>
       <p>On va faire une shopping liste ! Yay !!</p> 
        <ShoppingApp />
      </header>
    </div>
  );
}

export default App;
