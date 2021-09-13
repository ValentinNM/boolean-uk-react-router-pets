import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PetsList from "./components/PetsList";
import PetView from "./components/PetView";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <header>
          <h1>Wellcome to the PetShop 🐶 </h1>
        </header>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/pets">
          <PetsList />
        </Route>

        <Route>
          <PetView />
        </Route>

        <Route>
          <ContactUs />
        </Route>

        <Route>
          <NotFound />
          <Redirect />
        </Route>
      </Switch>
    </div>
  );
}
