import React from 'react'
import Navbar from "./Navbar"
import Button from "./Button"
import Header from "./Header"

import About from "./About"
import Works from "./Works"
import Blank from "./Blank"
import Portfolyo from "./Portfolyo"

import { useTheme } from "../context/ThemeContext";

function Container() {
    const { theme } = useTheme();

	return (
		<div className={`app ${theme}`}>
            	
			<Navbar />
			<hr />
		

			  
      <Header />
      <Button />
      <About />
      <Works />
      <Blank />
      <Portfolyo />
		</div>
	);
}

export default Container