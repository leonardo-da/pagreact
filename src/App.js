import React,{Component} from 'react';
import NavBar from './Components/NavBar'
import Body from './Components/Body'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
  	<div className="app">
	  	<div>
	   		<NavBar />
	   	</div>
		<div>
	   		<Body />
	   	</div>
	   	<div>
	   		<Footer />
	   	</div>
   	</div>
  );
}

export default App;
