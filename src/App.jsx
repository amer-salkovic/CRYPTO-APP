import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { LogIn } from './Components/LogIn/LogIn';
import { Route } from "react-router-dom"
import { Favorite } from "./Components/Favorite/Favorite"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <NavBar />
      <Route path="/login" component={LogIn} />
      <Route path="/favorite" component={Favorite} />
      <Footer />
    </>
  );
}

export default App;
