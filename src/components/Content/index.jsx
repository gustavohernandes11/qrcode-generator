import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./index.css";

function Content({ value, size = "250" }) {
	const [url, setUrl] = useState("");
	const [getError, setGetError] = useState(false);
	const [theme] = useContext(ThemeContext);

	useEffect(() => {
		setGetError(() => false);
		setUrl(
			`https://api.qrserver.com/v1/create-qr-code/?data=${value}&amp;size=${size}x${size}`
		);
		return () => {
			setUrl("");
		};
	}, [value, size]);

	function handleCatchError() {
		setGetError(true);
	}

	function QRCODEImage() {
		return (
			<figure>
				<img
					src={url}
					alt={`QrCode gerado pelo valor ${value} `}
					onError={handleCatchError}
				/>
				<figcaption>QRcode gerado com valor: {value}</figcaption>
			</figure>
		);
	}

	return (
		<>
			{value &&
				(!getError ? (
					<div
						id="content"
						className="content"
						style={{
							backgroundColor:
								theme === "light" ? "#f5f8ff" : "#1f2a48",
							color: theme === "light" ? "#121212" : "#f5f8ff",
							border:
								theme === "light" ? "1px solid grey" : "none",
						}}
					>
						<QRCODEImage />
					</div>
				) : (
					<p>Houve um erro ao carregar a imagem :/</p>
				))}
		</>
	);
}

export default Content;
