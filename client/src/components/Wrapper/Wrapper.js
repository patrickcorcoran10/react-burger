import React from "react";
// import "./Wrapper.css";

// This is a wrapper component. This is where we pass in props to be used by other components. 

const Wrapper = props => <main className="wrapper" {...props} />;

// Here we are exporting Wrapper. It will be imported to the App.js

export default Wrapper;