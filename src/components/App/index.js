import React, { useState, useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import Heading from "../Heading";
import Form from "../Form";
import Content from "../Content";
import Footer from "../Footer";

function App() {
	const [inputValue, setInputValue] = useState();
	const [theme] = useContext(ThemeContext);

	function handleClick() {
		const input = document.getElementById("main-input");
		setInputValue(input.value);
	}

	return (
		<div
			className="App"
			style={{
				backgroundColor: theme === "light" ? "#f0f3fa" : "#141c2f",
			}}
		>
			<Heading />
			<Form onClick={handleClick} />
			<Content value={inputValue} />
			<Footer />
		</div>
	);
}

export default App;
