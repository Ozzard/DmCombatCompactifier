import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { ICombatantProps } from './components/Combatant';
import Combatants, { ICombatantsProps } from './components/Combatants';
import Contact from './components/Contact';
import Credits from './components/Credits';
import Instructions from './components/Instructions';
import RoutedNavItem from './RoutedNavItem';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const combatants : Array<ICombatantProps> = [
    { name: "Necrodin 1" },
    { name: "Orc 1" },
    { name: "Orc 2" },
    { name: "Dragon 1" }
  ];

  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" dark className="bg-primary">
          <NavbarBrand tag={Link} to="/">DM Combat Compactifier</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <RoutedNavItem to="/instructions">Instructions</RoutedNavItem>
              <RoutedNavItem to="/contact">Contact</RoutedNavItem>
              <RoutedNavItem to="/credits">Credits</RoutedNavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Switch>
            <Route path="/instructions"><Instructions /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/credits"><Credits /></Route>
            <Route exact path="/"><Combatants combatants={combatants}/></Route>
          </Switch>
        </Container>
      </div>
    </Router>);
}
