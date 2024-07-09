import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Snack from "./MenuItem";
import CantFind from "./CantFind";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [fullMenu, setFullMenu] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setFullMenu((prevFullMenu) => [...prevFullMenu, ...snacks])
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setFullMenu((prevFullMenu) => [...prevFullMenu, ...drinks])
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  const isDrink = (itemId) => {
    return drinks.some(drink => drink.id === itemId)
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu isDrink={isDrink} category="Snacks" items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/fullmenu">
              <Menu isDrink={isDrink} category="Menu" items={fullMenu} title="Menu" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            
            <Route exact path="/drinks">
              <Menu isDrink={isDrink} category="Drinks" items={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            
            <Route>
              <CantFind />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
