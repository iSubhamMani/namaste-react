import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./src/logo.svg";
import user_logo from "./src/github.png";

/*
// JSX => React.createElement => React Element (JS Object) => HTML Element

// React Element

const elem = <span>This is React element</span>;

const heading = (
  <h1 id="heading" className="heading">
    Namaste React By JSX {elem}
  </h1>
); // This JSX code is transpiled to browser understandable JS code by Parcel

// React Components
// Two types: Class based (OLD) and functional based (NEW)

// React Functional Component

const TitleComponent = () => <h1 id="title">Hello this is the title</h1>;

// Component composition
const HeadingComponent = () => (
  <div id="container">
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    <h1>Namaste React by React Component</h1>
  </div>
);*/

// Assignment 1
/*
const TitleComponent = () => <h1>Namaste</h1>;

const HeaderComponent = () => (
  <div className="title">
    <TitleComponent />
    <h2>World</h2>
    <h3>!!</h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);*/

// Assignment 2

const HeaderComponent = () => (
  <div className="header">
    <img src={logo} className="header-logo" />
    <input type="search" />
    <img src={user_logo} className="user-logo" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
