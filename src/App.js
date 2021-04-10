<<<<<<< HEAD
import React,{useState,useCallback} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/home';
import Nav from './Components/navbar';

import Contact from './Components/contactUs';
import About from './Components/about';
import Sidebar from './UI/Sidebar/Sidebar';
import Backdrop from './UI/Backdrop/Backdrop'
import PoPup from './UI/PoPup/PoPup';
import Profile from './Pages/Profile/Profile';
function App() {
  
  
  const [open, setOpen] = useState(false);
  const [u, setU] = useState(false);
  const [m, setM] = useState(false);
=======
import React, { useState, useCallback, useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Components/home";
import Nav from "./Components/navbar";

import Contact from "./Components/contactUs";
import About from "./Components/about";
import Sidebar from "./UI/Sidebar/Sidebar";
import Backdrop from "./UI/Backdrop/Backdrop";
import PoPup from "./UI/PoPup/PoPup";
import Profile from "./Pages/Profile/Profile";
function App() {
  // let met=useRef()

  const [open, setOpen] = useState(false);
  const [u, setU] = useState(false);
  const [m, setM] = useState(false);
  const [outer, setOuter] = useState(false);
  const [inner, setInnre] = useState(false);
>>>>>>> eb14e2959be1b93a59a06b680fa1a20037ab8c13

  const openHandler = useCallback(() => {
    setOpen(true);
  }, []);

  const closeHandler = useCallback(() => {
    setOpen(false);
  }, []);
  const [open2, setOpen2] = useState(false);

<<<<<<< HEAD
  const openHandler2 = useCallback((url,method) => {
    setOpen2(true);
    setU(url)
    setM(method)
    console.log(method)
=======
  const openHandler2 = useCallback((url, method, o, i) => {
    setOpen2(true);
    setU(url);
    setM(method);
    if (url === "/food") {
      setOuter(o);
      setInnre(i);
    }
>>>>>>> eb14e2959be1b93a59a06b680fa1a20037ab8c13
  }, []);

  const closeHandler2 = useCallback(() => {
    setOpen2(false);
  }, []);
  return (
    <React.Fragment>
      <BrowserRouter>
<<<<<<< HEAD
          <Nav openHandler={openHandler} openHandler2={openHandler2} />
      <Backdrop
        open={open}
        clickHandler={openHandler}
        closeHandler={closeHandler}
        closeHandler2={closeHandler2}
      />
      <Sidebar
        open={open}
        clickHandler={openHandler}
        closeHandler={closeHandler}
      />
       <PoPup    open={open2}
                  url={u}
                  method={m}
        clickHandler2={openHandler2}
        closeHandler={closeHandler2} />
            <Switch>
              {/* <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component= {Login} /> */}
              <Route exact path='/' render={(props)=><Home closeHandler2={closeHandler2} {...props} />} />
              <Route exact path='/profile' component={Profile} />
              {/* <Route exact path='/' render={(props) => <Home closeHandler2={closeHandler2} {...props} />} /> */}
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/about' component={About}/>
              {/* <Route exact path='/forget' component= {ForgetPassword} />
              <Route exact path='/verify' component= {Verify} />
              <Route exact path='/reset' component= {ResetPassword} /> */}
            </Switch>
=======
        <Nav openHandler={openHandler} openHandler2={openHandler2} />
        <Backdrop
          open={open}
          clickHandler={openHandler}
          closeHandler={closeHandler}
          closeHandler2={closeHandler2}
        />
        <Sidebar
          open={open}
          clickHandler={openHandler}
          closeHandler={closeHandler}
        />
        <PoPup
          open={open2}
          url={u}
          method={m}
          outer={outer}
          inner={inner}
          clickHandler2={openHandler2}
          closeHandler={closeHandler2}
        />
        <Switch>
          {/* <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component= {Login} /> */}
          <Route
            exact
            path="/"
            render={(props) => (
              <Home closeHandler2={closeHandler2} {...props} />
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile
                closeHandler2={closeHandler2}
                openHandler2={openHandler2}
                {...props}
              />
            )}
          />
          {/* <Route exact path='/' render={(props) => <Home closeHandler2={closeHandler2} {...props} />} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path='/forget' component= {ForgetPassword} />
              <Route exact path='/verify' component= {Verify} />
              <Route exact path='/reset' component= {ResetPassword} /> */}
        </Switch>
>>>>>>> eb14e2959be1b93a59a06b680fa1a20037ab8c13
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
