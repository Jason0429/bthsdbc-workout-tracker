import React from "react";
import ohana from "../img/ohana.jpg";
import styled from "styled-components";

const BannerContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 50px;
		width: 50px;
		border-radius: 100%;
		box-shadow: 0 0 15px 3px #00000020;
		border: 5px solid white;
		margin-right: 10px;
	}

	h2 {
		font-weight: 600;
	}
`;

function Banner() {
	return (
		<BannerContainer>
			<img src={ohana} alt="BTHS Dragon Boat Club" />
			<h2>BTHS Dragon Boat Club</h2>
		</BannerContainer>
	);
}

export default Banner;
