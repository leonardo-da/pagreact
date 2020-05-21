import React from 'react';
import Typography from '@material-ui/core/Typography';
import image from './musicSheets/athousa/A_Thousand_Years_page-0001.jpg';
import image1 from './musicSheets/goodbye/Goodbye_Hachiko_page-0001.jpg';
import image2 from './musicSheets/married/Married_Life_page-0001.jpg'
import background from './musicSheets/1ra/back.jpg';

const mystyle = {
    textAlign:'center',
    height:500,
    width:300,
    padding:0,
    margin:0
};

const mystyle8 = {
    textAlign:'center',
    height:200,
    width:"50%",
    minWidth:"230px"
};

const mystyle1 = {
    textAlign:"center",
    padding:0,
    marginBottom:20,
};

const mystyle14 = {
    marginTop:30,
    textAlign:"center",
};

export default function Body() {
  return (
    <div>
        <div style={mystyle14}>
	        <a href=""><img style={mystyle} src={image} /></a>
	    </div>
	    <div style={mystyle1}>
	        <h2 style={mystyle1}>A thousand Year</h2>
	        <h3>Author: Cristina Perri</h3>
	    </div>

	    <div style={mystyle1}>
	        <a href=""><img style={mystyle} src={image1} /></a>
	    </div>
	    <div style={mystyle14}>
	        <h2 style={mystyle1}>Goodbye</h2>
	        <h3>Author: Jan A. P. Kaczmarek</h3>
	    </div>

	    <div style={mystyle14}>
	        <a href=""><img style={mystyle} src={image2} /></a>
	    </div>
	    <div style={mystyle14}>
	        <h2 style={mystyle1}>Married life</h2>
	        <h3>Author: Michael Giacchinok</h3>
	    </div>
	   
	    <div style={{margin:50,textAlign:'center'}}>
	    <h2>Help me</h2>
	    <form>
		  <label style={{marginTop:9}}>
		    Name:
		  </label>
		</form>
		<form>
		  <label>
		    <input type="text" name="name" style={{height:20 ,width:"50%",minWidth:"230px"}}/>
		  </label>
		</form>
		<form style={{marginTop:9}}>
		  <label>
		    Email:
		  </label>
		</form>
		<form>
		  <label>
		    <input type="text" name="Email" style={{height:20 ,width:"50%",minWidth:"230px"}}/>
		  </label>
		</form>
		<form style={{marginTop:9}}>
		  <label>
			Commentary:
		  </label>
		</form>
		<form>
		  <label>
		    <textarea type="week" name="coment" style={mystyle8}/>
		  </label>
		</form>
		</div>
    </div>
  );
}